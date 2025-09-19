import type { HostingProvider, ProviderType } from "@site/src/types/providers";
import ReactMarkdown from "react-markdown";
import Admonition from '@theme/Admonition';
import React, { useState } from 'react';
import Translate, { translate } from "@docusaurus/Translate";
import { providersData } from "../data/providers";

export const noP = (props: { children: any; }) => {
    const { children } = props;
    return children;
}

export const Provider = ({ type }) => {
    const hostingProviders: HostingProvider[] = providersData[type as ProviderType]

    return (
        <div>
            <ul>{hostingProviders.map((provider: HostingProvider) => (
                <li>
                    <a href={provider.url}>{provider.name}</a>
                    {provider.description != null ? (
                        <ReactMarkdown children={`&nbsp;&hyphen; ${provider.description}`} components={{ p: noP }} />
                    ) : (
                        ''
                    )}
                </li>
            ))}</ul>
        </div>
    )
}

export const ProviderSelector = () => {
    const providers: HostingProvider[] = [
        ...Object.values(providersData.built_in),
        ...Object.values(providersData.support), 
        ...Object.values(providersData.no_support)
    ].flat().sort((a, b) => a.name.localeCompare(b.name));

    providers.unshift({
        name: 'Not listed',
        description: translate({
            id: 'providers.other.description',
            message: '如果您的托管提供商未列出，请尝试在配置中启用 `clone-remote-port` 选项。然后，重启服务器，并尝试使用与 Java 版相同的 IP 和端口连接。<br> 如果这不起作用，请向您的服务器托管提供商询问 UDP 端口，并使用该端口。'
        })
    } as HostingProvider);
    

    const [selectedProvider, setSelectedProvider] = useState(null);

    const handleSelectionChange = (event) => {
        const selectedName = event.target.value;
        const provider = providers.find(p => p.name === selectedName);
        setSelectedProvider(provider);
    }

    return (
        <div className="host-select">
            <select onChange={handleSelectionChange}>
                <option value="none">Select a provider</option>
                {providers.map((provider) => (
                    <option key={provider.name} value={provider.name}>
                        {provider.name}
                    </option>
                ))}
            </select>
            <Admonition type="tip" title={<Translate id='components.provider.instructions'>Provider Instructions</Translate>}>
                {selectedProvider ? (
                    <ReactMarkdown>{selectedProvider.description}</ReactMarkdown>
                ) : (
                    <p>
                        <Translate id='components.provider.select'>Select a provider to see specific installation instructions</Translate>
                    </p>
                )}
            </Admonition>
        </div>
    );
}
