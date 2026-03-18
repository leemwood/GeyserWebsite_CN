---
title: 表单与 Cumulus
description: Cumulus 是 Geyser 和 Floodgate 中使用的表单 API，可用于扩展 Geyser 或 Floodgate 的项目中。
---

# 什么是 Cumulus？

Bedrock Edition 有一个很酷的独占功能 called Forms。
Cumulus 是我们在 Geyser 和 Floodgate 中使用的 Forms API。
源代码在[此处](https://github.com/GeyserMC/Cumulus)可用。您可以通过 [Floodgate API](/wiki/floodgate/api/) 或 [Geyser API](/wiki/geyser/api) 访问 Cumulus API。

Bedrock 知道三种类型的表单：
* ModalForm
* SimpleForm
* CustomForm

我们将一个一个地讨论它们，从最简单的开始，到最不简单的结束。
之后，您将了解每个组件的概述。
然后我们将讨论如何发送表单、接收响应以及做一些高级操作。

## ModalForm {#modalform}

虽然这是最简单的表单类型，但它也是定制化程度最低的。
您有一个标题、描述（内容）和两个按钮。

![ModalForm 示例](https://i.imgur.com/kMpMgOh.png)

图片中使用的代码：

```java
ModalForm.builder()
    .title("Title")
    .content("Content")
    .button1("Button 1")
    .button2("Button 2")
```

## SimpleForm {#simpleform}

虽然这个比 ModalForm 难一点，但它也有更多的定制性。
它仍然局限于标题、内容和按钮，但这些按钮也可以有图片，并且没有最少和最多的两个限制。

![SimpleForm 示例](https://i.imgur.com/3rj2OQ2.png)

图片中使用的代码：
```java
SimpleForm.builder()
    .title("Title")
    .content("Content")
    .button("Button without an image")
    .button("Button with URL image", FormImage.Type.URL, "https://github.com/GeyserMC.png?size=200")
    .button("Button with path image", FormImage.Type.PATH, "textures/i/glyph_world_template.png")
```

## CustomForm {#customform}

虽然 CustomForm 是我们列表中的最后一个（因此也是最难的一个），但它也具有最大的定制性。
此表单由标题、内容和不同组件的列表组成，例如标签、滑块和输入框。
请参阅[组件](https://github.com/GeyserMC/Cumulus/tree/master/src/main/java/org/geysermc/cumulus/component)获取有关您可以使用的每个组件以及在哪种表单类型中使用它们的更多信息。

![CustomForm 示例](https://i.imgur.com/zHgxELm.png)

图片中使用的代码：

```java
CustomForm.builder()
    .title("Title")
    .dropdown("Text", "Option 1", "Option 2")
    .input("Input", "placeholder")
    .toggle("Toggle")
    .slider("Text", 0, 10, 1, 5)
```

## 发送表单 {#sending-a-form}

在您决定要使用哪种表单类型并填写完实际内容后，就该将表单发送给 Bedrock 玩家了。
您可以通过调用 API 并将表单发送到玩家的 UUID 和表单来做到这一点：
```java
FloodgateApi.getInstance().sendForm(uuid, form); // 或 #sendForm(uuid, formBuilder)
```
或者您可以通过使用玩家的 FloodgatePlayer 实例来做到这一点：
```java
FloodgatePlayer player = FloodgateApi.getInstance().getPlayer(uuid);
player.sendForm(form); // 或 #sendForm(formBuilder)
```
所以您可以通过执行以下操作以相当紧凑的方式创建和发送表单：
```java
FloodgatePlayer player = FloodgateApi.getInstance().getPlayer(uuid);
...
player.sendForm(
    CustomForm.builder()
        .title("My cool title")
        .label("10/10 content")
);
```

## 从客户端接收响应 {#receiving-a-response-from-the-client}

我们可以将表单发送给客户端当然很好，但我们也希望能够从客户端获取响应并能够处理它们。
我们可以使用一个（或多个）结果处理器来做到这一点。最常用的结果处理器是：`validResultHandler(BiConsumer<Form, ValidFormResponseResult> | Consumer<ValidFormResponseResult>)`、`invalidResultHandler`、`closedResultHandler` 和 `closedOrInvalidResultHandler`。
以下是一个使用结果处理器的示例：
```java
CustomForm.builder()
    .title("geyser.auth.login.form.details.title")
    .label("geyser.auth.login.form.details.desc")
    .input("geyser.auth.login.form.details.email", "account@geysermc.org", "")
    .input("geyser.auth.login.form.details.pass", "123456", "")
    .closedOrInvalidResultHandler(() -> buildAndShowLoginDetailsWindow(session))
    .validResultHandler(response -> session.authenticate(response.next(), response.next())));
```

## 高级操作 {#advanced-stuff}

FormBuilder 还支持翻译构建器中使用的数据。
要添加翻译器，您可以使用 `translator(BiFunction<String, String, String>)` 或 `translator(BiFunction<String, String, String>, String)` 方法：
```java
ModalForm form = ModalForm.builder()
    .translator(this::translate, userLanguage)
    .title("Title")
    .content("Content")
    .button1("translate.button1")
    .button2("translate.button2")
    .build();

public String translate(String key, String locale) {
    // 此方法将为每个字符串调用，在本例中为 4 次：
    // Title、Content、translate.button1、translate.button2
    // 这里放置您自己的翻译逻辑
    // 返回替换该键的值
}
```
或者您可以直接在 FormBuilder 中使用翻译方法，而不是单独的方法：
```java
ModalForm form = ModalForm.builder()
    .translator((key, unused) -> {
        // 此方法将为每个字符串调用，在本例中为 4 次：
        // Title、Content、translate.button1、translate.button2
        // 由于这不是单独的方法，因此不需要 locale 参数，所以它是未使用的。
        // 这里放置您自己的翻译逻辑
        // 返回替换该键的值
    })
    .title("Title")
    .content("Content")
    .button1("translate.button1")
    .button2("translate.button2")
    .build();
```
