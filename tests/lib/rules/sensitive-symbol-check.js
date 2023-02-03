/**
 * @fileoverview check sensitive symbol
 * @author yaofangchao
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/sensitive-symbol-check"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

// 加入默认配置
const ruleTester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: { 
    ecmaVersion: 2018,
    sourceType: 'module',
  }
})

ruleTester.run('ensitive-symbol-check', rule, {
  valid: [
      '// sssss',
      '// fixdddd',
      {
        code: '<template><div>￥3.2</div></template>',
        errors: [{ 
          messageId: 'avoidSymbol',
          data: {
            name: `$`
          },
        }],
        options: [{ // 通过options 配置自定义参数
          sensitiveSymbols: ['$']
        }]
      },
  ],
  invalid: [
    {
        code: '<template><div>$3.2</div></template>',
        errors: [{ 
          messageId: 'avoidSymbol',
          data: {
            name: `$`
          },
        }],
        options: [{ // 通过options 配置自定义参数
          sensitiveSymbols: ['$']
        }]
    },
    {
      code: `
        <script>
          export default {
            data() {
              return {
                test: '$3.2'
              }
            }
          }
        </script>
      `,
      errors: [{ 
        messageId: 'avoidSymbol',
        data: {
          name: `$`
        },
      }],
      options: [{ // 通过options 配置自定义参数
        sensitiveSymbols: ['$']
      }]
  },
  ]
})

