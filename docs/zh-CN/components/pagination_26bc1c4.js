amis.define('docs/zh-CN/components/pagination.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Pagination 分页组件",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Pagination",
    "icon": null,
    "order": 73,
    "html": "<div class=\"markdown-body\"><p>分页组件</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"service\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/crud/table\",\n    \"body\": [\n        {\n            \"type\": \"pagination\",\n            \"layout\": \"total,perPage,pager,go\",\n            \"mode\": \"normal\",\n            \"activePage\": 2,\n            \"lastPage\": 99999,\n            \"total\": 999,\n            \"perPage\": 10,\n            \"maxButtons\": 7,\n            \"showPerPage\": true,\n            \"perPageAvailable\": [10, 20, 50, 100],\n            \"showPageInput\": true,\n            \"disabled\": false\n\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E7%AE%80%E6%98%93%E6%A8%A1%E5%BC%8F\" href=\"#%E7%AE%80%E6%98%93%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>简易模式</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"service\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/crud/table\",\n    \"body\": [\n        {\n            \"type\": \"pagination\",\n            \"mode\": \"simple\",\n            \"activePage\": 2,\n            \"hasNext\": true\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>&quot;pagination&quot;</code></td>\n<td>指定为 Pagination渲染器</td>\n</tr>\n<tr>\n<td>mode</td>\n<td><code>normal | simple</code></td>\n<td><code>normal</code></td>\n<td>迷你版本/简易版本    只显示左右箭头，配合hasNext使用</td>\n</tr>\n<tr>\n<td>layout</td>\n<td><code>string | string[]</code></td>\n<td><code>[&quot;pager&quot;]</code></td>\n<td>通过控制layout属性的顺序，调整分页结构布局</td>\n</tr>\n<tr>\n<td>maxButtons</td>\n<td><code>number</code></td>\n<td><code>5</code></td>\n<td>最多显示多少个分页按钮，最小为5</td>\n</tr>\n<tr>\n<td>lastPage</td>\n<td><code>number</code></td>\n<td></td>\n<td>总页数 （设置总条数total的时候，lastPage会重新计算）</td>\n</tr>\n<tr>\n<td>total</td>\n<td><code>number</code></td>\n<td></td>\n<td>总条数</td>\n</tr>\n<tr>\n<td>activePage</td>\n<td><code>number</code></td>\n<td><code>1</code></td>\n<td>当前页数</td>\n</tr>\n<tr>\n<td>perPage</td>\n<td><code>number</code></td>\n<td><code>10</code></td>\n<td>每页显示多条数据</td>\n</tr>\n<tr>\n<td>showPerPage</td>\n<td><code>boolean</code></td>\n<td>false</td>\n<td>是否展示perPage切换器 layout和showPerPage都可以控制</td>\n</tr>\n<tr>\n<td>perPageAvailable</td>\n<td><code>number[]</code></td>\n<td><code>[10, 20, 50, 100]</code></td>\n<td>指定每页可以显示多少条</td>\n</tr>\n<tr>\n<td>showPageInput</td>\n<td><code>boolean</code></td>\n<td>false</td>\n<td>是否显示快速跳转输入框  layout和showPageInput都可以控制</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td><code>boolean</code></td>\n<td>false</td>\n<td>是否禁用</td>\n</tr>\n<tr>\n<td>onPageChange</td>\n<td>page、perPage改变时会触发</td>\n<td>(page: number, perPage: number) =&gt; void;</td>\n<td>分页改变触发</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "简易模式",
          "fragment": "%E7%AE%80%E6%98%93%E6%A8%A1%E5%BC%8F",
          "fullPath": "#%E7%AE%80%E6%98%93%E6%A8%A1%E5%BC%8F",
          "level": 3
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
