import { defineConfig } from 'dumi';
import { version } from './package.json';

export default defineConfig({
    title: '@components/template',
    favicon: '/business/components-template/favicon.ico',
    logo: '/business/components-template/favicon.ico',
    outputPath: 'docs-dist',
    mode: 'site',
    resolve: {
        includes: ['docs', 'components'],
    },
    base: '/business/components-template',
    publicPath: '/business/components-template/',
    exportStatic: {},
    navs: [
        null,
        {
            title: version,
            path: 'https://xxxx/xxxx/xxx.git',
        },
    ],
    extraBabelPlugins: [
        ['import', { libraryName: 'antd', style: true }, 'antd'],
        [
            'import',
            {
                libraryName: '@ant-design/icons',
                customName: name => {
                    return `@ant-design/icons/lib/icons/${name}`;
                },
                camel2DashComponentName: false,
            },
            '@ant-design/icons',
        ],
        [
            'import',
            {
                libraryName: '@components/template',
                libraryDirectory: 'components',
                customStyleName: name => {
                    return `../style`;
                },
            },
            '@components/template',
        ],
    ],
    styles: [
        `.form-layout-demo {overflow: auto; padding: 10px}`,
        `.markdown table td:nth-child(3) {color: #c41d7f;}`,
    ],
    locale: {
        default: 'zh-CN',
        antd: true,
        baseNavigator: false,
    },
    lessLoader: {
        modifyVars: {
            // 'root-entry-name': 'dark',
            'root-entry-name': 'default',
        },
    },
    links: [],
});
