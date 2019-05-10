import MobxReactForm from 'mobx-react-form';
import validatorjs from 'validatorjs';

function defaultBindings({ field, props, $try }) {
  const keys = [
    'id',
    'name',
    'type',
    'value',
    'label',
    'placeholder',
    'disabled',
    'onChange',
    'onBlur',
    'onFocus',
    'autoFocus',
    'focused',
    // Added this
    'error',
  ];
  const bindings = {};
  keys.forEach(key => {
    bindings[key] = $try(props[key], field[key]);
  });
  // For react keys
  bindings.key = bindings.id;
  return bindings;
}

export default class FormData extends MobxReactForm {
  constructor(fields, { plugins = { dvr: validatorjs }, hooks, options }) {
    super(fields, { plugins, hooks, options });
  }

  // eslint-disable-next-line class-methods-use-this
  bindings() {
    return {
      Default: defaultBindings,
      Select: ({ field, props, $try }) => ({
        ...defaultBindings({ field, props, $try }),
        options: $try(props.options, field.options),
      }),
      Radio: ({ field, props, $try }) => ({
        ...defaultBindings({ field, props, $try }),
        key: `${$try(props.id, field.id)}-${props.value}`,
        checked: field.value === props.value,
      }),
      Checkbox: ({ field, props, $try }) => ({
        ...defaultBindings({ field, props, $try }),
        value: true,
        checked: field.value,
      }),
    };
  }
}
