import type { GetThemeOptions } from './helper'
import { createThemeHelpers, getRuleToken } from './helper'
import { toArray } from './utils'
import { VscodeThemeColorGenerator } from './vscodeThemeColor'

export default function getTheme(options: GetThemeOptions) {
  const {
    pick,
    v,
    paletteColor,
  } = createThemeHelpers(options)
  const themeColors = new VscodeThemeColorGenerator({
    v,
    pick,
    palette: paletteColor,
  })
  // https://code.visualstudio.com/api/references/theme-color
  const theme = {
    $schema: 'vscode://schemas/color-theme',
    name: options.name,
    base: pick({ light: 'vs', dark: 'vs-dark' }),
    colors: themeColors.buildColor(),
    semanticHighlighting: true,
    semanticTokenColors: {
      namespace: v('namespace'),
      property: v('property'),
      interface: v('interface'),
      type: v('interface'),
      class: v('class'),
      newOperator: pick({
        dark: '#ed9cc2',
        light: '#c05386',
      }),
      stringLiteral: pick({
        dark: '#74ccaa',
        light: '#377961',
      }),
      customLiteral: pick({
        dark: '#f6c177',
        light: '#c7792b',
      }),
      numberLiteral: pick({
        dark: '#f6c177',
        light: '#c7792b',
      }),
    },
    tokenColors: [
      /* String */
      getRuleToken('String', [
        'string',
        'string punctuation.section.embedded source',
        'attribute.value',
      ], v('string')),
      /* Number */
      getRuleToken('Number', ['constant.numeric'], v('number')),
      getRuleToken('Boolean', ['constant.language.boolean'], v('boolean')),
      getRuleToken('Namespace', ['namespace'], v('namespace')),
      getRuleToken('Identifier', [
        'variable',
        'identifier',
        'support.variable',
        'support.class',
        'support.constant',
        'meta.definition.variable entity.name.function',
      ], v('variable')),

      getRuleToken('Keywords', [
        'keyword',
        'storage.type.class.jsdoc ',
        'modifier',
        'variable.language.this',
        'support.type.object',
        'constant.language',
      ], v('keyword')),

      getRuleToken('Function', ['variable.function'], v('function')),
      getRuleToken('Function call', ['entity.name.function', 'support.function'], v('function')),
      getRuleToken('Storage', [
        'storage',
        'storage.type',
        'storage.modifier',
        'support.type.builtin',
        'constant.language.undefined',
        'constant.language.null',
      ], v('builtin')),
      getRuleToken('Modules', ['support.module', 'support.node'], v('variable'), 'italic'),
      getRuleToken('Type', ['support.type', 'entity.name.type', 'entity.other.inherited-class', 'support.type.primitive', 'entity.name.type'], v('type')),
      getRuleToken('Comment', ['comment', 'punctuation.definition.comment', 'string.comment'], v('comment'), 'italic'),
      /* Class */
      getRuleToken('Class', ['entity.name.type.class'], v('class'), 'underline'),
      getRuleToken('Class variable', ['variable.object.property', 'meta.field.declaration entity.name.function'], v('parameter')),
      getRuleToken('Class method', ['meta.definition.method entity.name.function'], v('function')),

      getRuleToken('Function definition', ['meta.function entity.name.function'], v('function')),
      getRuleToken('Function call', ['meta.function-call entity.name.function'], v('function')),
      getRuleToken('Constant', [
        'constant',
        'entity.name.constant',
        'variable.language',
        'meta.definition.variable',
      ], v('constant')),
      getRuleToken('Template expression', [
        'template.expression.begin',
        'template.expression.end',
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end',
      ], v('regex')),
      getRuleToken('YAML Key', ['entity.name.tag.yaml'], v('variable')),

      // JSON
      getRuleToken('JSON key', [
        'meta.object-literal.key',
        'meta.object-literal.key string',
        'support.type.property-name.json',
      ], v('variable')),
      getRuleToken('JSON constant', ['constant.language.json'], v('constant')),

      /* CSS */
      getRuleToken('CSS tag', ['entity.name.tag'], v('keyword')),
      getRuleToken('CSS class', ['entity.other.attribute-name.class'], v('class')),
      getRuleToken('CSS id', ['entity.other.attribute-name.id'], v('interface')),

      /* HTML */
      getRuleToken('HTML tag outline', ['meta.tag', 'punctuation.definition.tag'], v('keyword')),
      getRuleToken('HTML tag inner', ['entity.name.tag', 'tag.html'], v('type')),
      getRuleToken('HTML attribute', [
        'entity.other.attribute-name',
        'invalid.deprecated.entity.other.attribute-name.html',
      ], v('variable')),

      /* punctuation */
      getRuleToken('punctuation', [
        'delimiter.bracket',
        'delimiter',
        'invalid.illegal.character-not-allowed-here.html',
        'keyword.operator.rest',
        'keyword.operator.spread',
        'keyword.operator.type.annotation',
        'keyword.operator.relational',
        'keyword.operator.assignment',
        'meta.brace',
        'meta.tag.block.any.html',
        'meta.tag.inline.any.html',
        'meta.tag.structure.input.void.html',
        'meta.type.annotation',
        'meta.embedded.block.github-actions-expression',
        'storage.type.function.arrow',
        'keyword.operator.type',
        'meta.objectliteral.ts',
        'punctuation',
      ], v('punctuation')),
      getRuleToken('', ['variable.parameter.function'], v('foreground')),

      /* html */
      getRuleToken('', [
        'text.html.derivative',
        'storage.modifier.package',
        'storage.modifier.import',
        'storage.type.java',
      ], v('foreground')),
      getRuleToken('', [
        'punctuation.definition.string',
        'punctuation.support.type.property-name',
      ], v('string', '99')),

      getRuleToken('', [
        'support',
      ], v('property')),

      getRuleToken('', [
        'property',
        'meta.property-name',
        'meta.object-literal.key',
        'entity.name.tag.yaml',
        'attribute.name',
      ], v('property')),

      getRuleToken('', [
        'keyword.operator',
        'keyword.operator.assignment.compound',
        'meta.var.expr.ts',
      ], v('operator')),

      getRuleToken('', [
        'invalid.broken',
      ], paletteColor.red[7], 'italic'),

      {
        scope: 'invalid.deprecated',
        settings: {
          fontStyle: 'italic',
          foreground: paletteColor.red[7],
        },
      },
      {
        scope: 'invalid.illegal',
        settings: {
          fontStyle: 'italic',
          foreground: paletteColor.red[7],
        },
      },
      {
        scope: 'invalid.unimplemented',
        settings: {
          fontStyle: 'italic',
          foreground: paletteColor.red[7],
        },
      },
      {
        scope: 'carriage-return',
        settings: {
          fontStyle: 'italic underline',
          background: pick({ light: paletteColor.red[5], dark: paletteColor.red[6] }),
          foreground: paletteColor.gray[0],
          content: '^M',
        },
      },
      {
        scope: 'message.error',
        settings: {
          foreground: paletteColor.red[3],
        },
      },
      {
        scope: 'string variable',
        settings: {
          foreground: v('string'),
        },
      },
      {
        scope: ['source.regexp', 'string.regexp'],
        settings: {
          foreground: v('regex'),
        },
      },
      {
        scope: [
          'string.regexp.character-class',
          'string.regexp constant.character.escape',
          'string.regexp source.ruby.embedded',
          'string.regexp string.regexp.arbitrary-repitition',
        ],
        settings: {
          foreground: v('string'),
        },
      },
      {
        scope: 'string.regexp constant.character.escape',
        settings: {
          foreground: v('yellow'),
        },
      },
      {
        scope: ['support.constant'],
        settings: {
          foreground: v('constant'),
        },
      },
      {
        scope: ['constant.numeric', 'number'],
        settings: {
          foreground: v('number'),
        },
      },
      {
        scope: ['keyword.other.unit'],
        settings: {
          foreground: v('builtin'),
        },
      },
      {
        scope: ['constant.language.boolean', 'constant.language'],
        settings: {
          foreground: v('boolean'),
        },
      },
      {
        scope: 'meta.module-reference',
        settings: {
          foreground: v('primary'),
        },
      },
      {
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
          foreground: v('orange'),
        },
      },
      {
        scope: ['markup.heading', 'markup.heading entity.name'],
        settings: {
          fontStyle: 'bold',
          foreground: v('primary'),
        },
      },
      {
        scope: 'markup.quote',
        settings: {
          foreground: v('interface'),
        },
      },
      {
        scope: 'markup.italic',
        settings: {
          fontStyle: 'italic',
          foreground: v('foreground'),
        },
      },
      {
        scope: 'markup.bold',
        settings: {
          fontStyle: 'bold',
          foreground: v('foreground'),
        },
      },
      {
        scope: 'markup.raw',
        settings: {
          foreground: v('primary'),
        },
      },
      {
        scope: [
          'markup.deleted',
          'meta.diff.header.from-file',
          'punctuation.definition.deleted',
        ],
        settings: {
          foreground: paletteColor.red[7],
        },
      },
      {
        scope: [
          'markup.inserted',
          'meta.diff.header.to-file',
          'punctuation.definition.inserted',
        ],
        settings: {
          foreground: paletteColor.green[6],
        },
      },
      {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: {
          foreground: paletteColor.orange[6],
        },
      },
      {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: {
          foreground: paletteColor.gray[1],
          background: paletteColor.blue[6],
        },
      },
      {
        scope: 'meta.diff.range',
        settings: {
          foreground: pick({ light: paletteColor.purple[5], dark: paletteColor.purple[6] }),
          fontStyle: 'bold',
        },
      },
      {
        scope: 'meta.diff.header',
        settings: {
          foreground: paletteColor.blue[6],
        },
      },
      {
        scope: 'meta.separator',
        settings: {
          fontStyle: 'bold',
          foreground: paletteColor.blue[6],
        },
      },
      {
        scope: 'meta.output',
        settings: {
          foreground: paletteColor.blue[6],
        },
      },
      {
        scope: [
          'brackethighlighter.tag',
          'brackethighlighter.curly',
          'brackethighlighter.round',
          'brackethighlighter.square',
          'brackethighlighter.angle',
          'brackethighlighter.quote',
        ],
        settings: {
          foreground: paletteColor.gray[6],
        },
      },
      {
        scope: 'brackethighlighter.unmatched',
        settings: {
          foreground: paletteColor.red[7],
        },
      },
      {
        scope: [
          'constant.other.reference.link',
          'string.other.link',
          'punctuation.definition.string.begin.markdown',
          'punctuation.definition.string.end.markdown',
        ],
        settings: {
          foreground: v('string'),
        },
      },
      {
        scope: ['markup.underline.link.markdown'],
        settings: {
          foreground: v('secondaryForeground'),
          fontStyle: 'underline',
        },
      },
      {
        scope: ['type.identifier'],
        settings: {
          foreground: v('class'),
        },
      },
      {
        scope: ['entity.other.attribute-name.html.vue'],
        settings: {
          foreground: v('function'),
        },
      },
      // new
      {
        name: '分号、逗号',
        scope: [
          'punctuation.separator.comma',
          'punctuation.terminator.expression',
          'punctuation.terminator.statement',
          'punctuation.terminator.rule.scss',
          'meta.property-list.scss',
          'meta.property-list.scss',
          'meta.property-list.scss',
          'source.css.scss',
        ],
        settings: {
          foreground: paletteColor.gray[6],
        },
      },
      {
        name: 'CSS/SCSS 关键字',
        scope: ['keyword.control.at-rule'],
        settings: {
          foreground: paletteColor.blue[5],
        },
      },
      {
        name: '注释/函数参数 斜体',
        scope: [
          'comment',
          'entity.name.variable.parameter',
          'meta.at-rule.function variable',
          'meta.at-rule.mixin variable',
          'variable.parameter',
        ],
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        name: 'delete',
        scope: [
          'keyword.operator.expression.delete.ts',
        ],
        settings: {
          fontStyle: 'italic',
          foreground: paletteColor.red[3],
        },
      },
    ],
    rules: [],
  }

  // monaco rules
  const rules: any[] = []

  theme.tokenColors.forEach(({ scope, settings }: any) => {
    for (const s of toArray(scope)) {
      rules.push({
        token: s,
        foreground: settings.foreground?.replace('#', ''),
      })
    }
  })

  theme.rules = rules as any

  return theme
}
