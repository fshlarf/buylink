<template>
  <div :class="className">
    <label v-if="label" class="block text-sm mb-2" :for="name">
      {{ label }}
    </label>
    <div class="form-content relative z-0">
      <textarea
        class="relative z-0 appearance-none border rounded-lg w-full text-14 md:text-16 py-4 px-3 text-gray-700 leading-tight focus:outline-none"
        :class="`${
          errorMessage ? 'border-error' : 'border-soft-purple'
        } ${inputClass}`"
        :rows="rows"
        :name="name"
        v-bind="$attrs"
        v-on="$listeners"
        :value="value"
        :placeholder="placeholder"
        @input="onInput($event.target.value)"
      />
      <div class="icon-left">
        <slot name="iconLeft"></slot>
      </div>
    </div>

    <p v-if="errorMessage" class="text-error text-xs">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
import { defineComponent, ref } from "@nuxtjs/composition-api";
import { inputValidation } from "../../../helper/validation";
export default defineComponent({
  name: "Input",
  props: {
    value: {
      type: String | Number,
    },
    validation: {
      type: String,
      defult: "",
    },
    label: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    rows: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
    inputClass: {
      type: String,
      default: "",
    },
  },
  model: {
    prop: "value",
    event: "update",
  },
  setup(props, { emit }) {
    const errorMessage = ref("");

    const onInput = (input) => {
      emit("update", input);
      validate(input);
    };

    const validate = (input) => {
      if (props.validation) {
        const dataValidation = props.validation.split("|");
        errorMessage.value = inputValidation(dataValidation, props.name, input);
      }

      emit("validate", errorMessage.value);
    };

    return {
      errorMessage,
      onInput,
      validate,
    };
  },
});
</script>

<style lang="scss" scoped>
.form-content {
  svg {
    width: 16px;
    height: auto;
    fill: #a0a3bd;
  }
  .icon-left {
    position: absolute;
    right: 0.75rem;
    top: 1.25rem;
  }
}
.border-soft-purple:focus {
  border: solid #0194f3 2px;
}
</style>
