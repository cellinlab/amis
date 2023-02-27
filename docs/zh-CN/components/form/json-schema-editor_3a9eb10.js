amis.define('docs/zh-CN/components/form/json-schema-editor.md', function(require, exports, module, define) {

  module.exports = {
    "title": "JSONSchema Editor",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "JSONSchema Editor",
    "icon": null,
    "order": 61,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2><blockquote>\n<p>1.9.0 及以上版本</p>\n</blockquote>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    debug: true,\n    \"body\": [\n        {\n            \"type\": \"json-schema-editor\",\n            \"name\": \"schema\",\n            \"label\": \"字段类型\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%A1%B6%E7%BA%A7%E7%B1%BB%E5%9E%8B%E5%8F%AF%E9%85%8D%E7%BD%AE\" href=\"#%E9%A1%B6%E7%BA%A7%E7%B1%BB%E5%9E%8B%E5%8F%AF%E9%85%8D%E7%BD%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>顶级类型可配置</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"json-schema-editor\",\n            \"name\": \"schema\",\n            \"label\": \"字段类型\",\n            \"rootTypeMutable\": true,\n            \"showRootInfo\": true\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%A2%84%E8%AE%BE%E7%B1%BB%E5%9E%8B\" href=\"#%E9%A2%84%E8%AE%BE%E7%B1%BB%E5%9E%8B\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>预设类型</h2><p>通过设置 definitions 属性可以提供一些默认类型，可以减少类型的定义成本。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"form-item\">{\n    label: 'JSON Schema Editor',\n    name: 'schema',\n    // showRootInfo: true,\n    // rootTypeMutable: true,\n    type: 'json-schema-editor',\n    disabledTypes: ['null', 'interger', 'boolean'],\n    definitions: {\n        user: {\n            type: 'object',\n            title: '用户',\n            properties: {\n            name: {\n                type: 'string',\n                title: '用户名',\n                description: '用户名信息'\n            },\n\n            id: {\n                type: 'interger',\n                title: '用户ID'\n            },\n\n            email: {\n                type: 'string',\n                title: '用户邮箱'\n            },\n\n            displayName: {\n                type: 'string',\n                title: '用户昵称'\n            }\n            }\n        }\n    }\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%BC%80%E5%90%AF%E9%AB%98%E7%BA%A7%E9%85%8D%E7%BD%AE\" href=\"#%E5%BC%80%E5%90%AF%E9%AB%98%E7%BA%A7%E9%85%8D%E7%BD%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>开启高级配置</h2><p>通过 <code>enableAdvancedSetting</code> 可以开启高级配置，同时通过 <code>advancedSettings</code> 可以定制弹窗中的配置面板。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n            \"type\": \"json-schema-editor\",\n            \"name\": \"schema\",\n            \"label\": \"字段类型\",\n            \"enableAdvancedSetting\": true,\n            \"advancedSettings\": {\n                \"string\": [\n                    {\n                        \"type\": \"input-text\",\n                        \"name\": \"maxLength\",\n                        \"label\": \"Max Length\"\n                    }\n                ],\n                \"number\": [\n                    {\n                        \"type\": \"input-number\",\n                        \"name\": \"max\",\n                        \"label\": \"Max\"\n                    }\n                ]\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8D%A0%E4%BD%8D%E6%8F%90%E7%A4%BA\" href=\"#%E5%8D%A0%E4%BD%8D%E6%8F%90%E7%A4%BA\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>占位提示</h2><blockquote>\n<p>2.7.3 及以上版本</p>\n</blockquote>\n<p>设置<code>placeholder</code>属性，可以修改属性控件的默认占位提示文本，当前属性值会和默认值做合并</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"debug\": true,\n    \"body\": [\n        {\n            \"type\": \"json-schema-editor\",\n            \"name\": \"schema\",\n            \"label\": \"字段类型\",\n            \"enableAdvancedSetting\": true,\n            \"placeholder\": {\n                \"key\": \"请输入字段名称\",\n                \"title\": \"请输入名称\",\n                \"description\": \"请输入描述信息\",\n                \"default\": \"\",\n                \"empty\": \"暂无字段\"\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n<th>版本</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>rootTypeMutable</td>\n<td><code>boolean</code></td>\n<td>false</td>\n<td>顶级类型是否可配置</td>\n<td></td>\n</tr>\n<tr>\n<td>showRootInfo</td>\n<td><code>boolean</code></td>\n<td>false</td>\n<td>是否显示顶级类型信息</td>\n<td></td>\n</tr>\n<tr>\n<td>disabledTypes</td>\n<td><code>Array&lt;string&gt;</code></td>\n<td></td>\n<td>用来禁用默认数据类型，默认类型有：string、number、interger、object、number、array、boolean、null</td>\n<td></td>\n</tr>\n<tr>\n<td>definitions</td>\n<td><code>object</code></td>\n<td></td>\n<td>用来配置预设类型</td>\n<td></td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td><code>SchemaEditorItemPlaceholder</code></td>\n<td><code>{key: &quot;字段名&quot;, title: &quot;名称&quot;, description: &quot;描述&quot;, default: &quot;默认值&quot;, empty: &quot;&lt;空&gt;&quot;,}</code></td>\n<td>属性输入控件的占位提示文本</td>\n<td><code>2.7.3</code></td>\n</tr>\n</tbody></table>\n<h3><a class=\"anchor\" name=\"schemaeditoritemplaceholder\" href=\"#schemaeditoritemplaceholder\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>SchemaEditorItemPlaceholder</h3><pre><code class=\"language-typescript\"><span class=\"token keyword\">interface</span> <span class=\"token class-name\">SchemaEditorItemPlaceholder</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\">/* 字段名称输入框占位文本 */</span>\n  key<span class=\"token operator\">?</span><span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">;</span>\n  <span class=\"token comment\">/* 名称输入框占位文本 */</span>\n  title<span class=\"token operator\">?</span><span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">;</span>\n  <span class=\"token comment\">/* 描述信息输入框占位文本 */</span>\n  description<span class=\"token operator\">?</span><span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">;</span>\n  <span class=\"token comment\">/* 默认值输入框占位文本 */</span>\n  <span class=\"token keyword\">default</span><span class=\"token operator\">?</span><span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">;</span>\n  <span class=\"token comment\">/* 默认值输入框占位文本 */</span>\n  empty<span class=\"token operator\">?</span><span class=\"token operator\">:</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "顶级类型可配置",
          "fragment": "%E9%A1%B6%E7%BA%A7%E7%B1%BB%E5%9E%8B%E5%8F%AF%E9%85%8D%E7%BD%AE",
          "fullPath": "#%E9%A1%B6%E7%BA%A7%E7%B1%BB%E5%9E%8B%E5%8F%AF%E9%85%8D%E7%BD%AE",
          "level": 2
        },
        {
          "label": "预设类型",
          "fragment": "%E9%A2%84%E8%AE%BE%E7%B1%BB%E5%9E%8B",
          "fullPath": "#%E9%A2%84%E8%AE%BE%E7%B1%BB%E5%9E%8B",
          "level": 2
        },
        {
          "label": "开启高级配置",
          "fragment": "%E5%BC%80%E5%90%AF%E9%AB%98%E7%BA%A7%E9%85%8D%E7%BD%AE",
          "fullPath": "#%E5%BC%80%E5%90%AF%E9%AB%98%E7%BA%A7%E9%85%8D%E7%BD%AE",
          "level": 2
        },
        {
          "label": "占位提示",
          "fragment": "%E5%8D%A0%E4%BD%8D%E6%8F%90%E7%A4%BA",
          "fullPath": "#%E5%8D%A0%E4%BD%8D%E6%8F%90%E7%A4%BA",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2,
          "children": [
            {
              "label": "SchemaEditorItemPlaceholder",
              "fragment": "schemaeditoritemplaceholder",
              "fullPath": "#schemaeditoritemplaceholder",
              "level": 3
            }
          ]
        }
      ],
      "level": 0
    }
  };

});
