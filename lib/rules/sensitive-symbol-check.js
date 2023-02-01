/**
 * @fileoverview check sensitive symbol
 * @author yaofangchao
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
let sensitiveSymbols = []
  
  const reportMsgByNode = function(node, context){
    if((node.type === 'VText' || node.type === 'Literal') && typeof(node.value) === 'string'){
      if(!sensitiveSymbols?.length || !node?.value?.length) {
        return
      }
      for(let i = 0; i < sensitiveSymbols.length; i++) {
        if(node.value.indexOf(sensitiveSymbols[i]) > -1) {
          context.report({
            node,
            messageId: 'avoidSymbol',
            data: {
              name: `${sensitiveSymbols[i]}`
            },
          })
        }
      }
    }
  }

  const existSensitiveSymbols = function(node) {
    if(!sensitiveSymbols?.length || !node?.value?.length) {
      return {
        exist: false,
        symbol: ''
      }
    }
    for(let i = 0; i < sensitiveSymbols.length; i++) {
      if(node.value.indexOf(sensitiveSymbols[i]) > -1) {
        return {
          exist: true,
          symbol: sensitiveSymbols[i]
        }
      }
    }
    return false
  }

  module.exports = {
    meta: {
      type: "problem",
      docs: {
        description: "In the Vue project, eslint prompts to verify whether the Yen symbol ¥ is used",
        category: "Fill me in",
        recommended: false
      },
      schema: [
        {
            "type": "object",
            "properties": {
                "sensitiveSymbols": {
                    "type": "Array"
                }
            },
            "additionalProperties": false
        }
      ],
      messages: {
        avoidSymbol: "Symbol {{name}} can't be used in this project",
      },
    },
  
    create: function(context) {
      sensitiveSymbols = context.options?.[0]?.sensitiveSymbols || []
    
      return context.parserServices.defineTemplateBodyVisitor(
        // Event handlers for <template>.
        {
          'Literal': (node)=> {
            reportMsgByNode(node, context)
          },
          'VText': (node)=>{ //模板中的值
            reportMsgByNode(node, context)
          },
        },
        // Event handlers for <script> or scripts. (optional)
        {
            'Literal': (node)=> {
              reportMsgByNode(node, context)
            }
        },
        // Options. (optional)
        {
            templateBodyTriggerSelector: "Program:exit"
        }
      )
    }
  };
