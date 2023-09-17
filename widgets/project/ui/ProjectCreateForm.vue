<template>
  <div class="project-create-form">
    <div class="project-create-form__title">Create a new project</div>

    <div class="project-create-form__field project-create-form__field--input">
      <div class="project-create-form__label">Project name<span>*</span></div>
      <UIInput
        v-model.trim="project.name"
        size="large"
        :error="v$.name.$error"
        :error-messages="v$.name.$errors[0]?.$message"
      />
    </div>

    <div class="project-create-form__field project-create-form__field--input">
      <div class="project-create-form__label">Slug<span>*</span></div>
      <div class="project-create-form__slug">
        <UIInput
          v-model.trim="project.slug"
          size="large"
          :error="v$.slug.$error"
          :error-messages="v$.slug.$errors[0]?.$message"
        />
        <UIToggleButton
          class="project-create-form__link-toggle"
          v-model="isSlugify"
          nuxt-icon-true="link"
          nuxt-icon-false="link-off"
          size="large"
        />
      </div>
    </div>

    <div class="project-create-form__field">
      <div class="project-create-form__label">Short description</div>
      <UITextarea
        v-model.trim="project.description_short"
        size="large"
        rows="6"
        counter="255"
        persistent-counter
        :error="v$.description_short.$error"
        :error-messages="v$.description_short.$errors[0]?.$message"
      />
    </div>

    <div class="project-create-form__field project-create-form__field--description">
      <div class="project-create-form__label">Description</div>
      <UITextarea
        v-model.trim="project.description"
        size="large"
        rows="8"
        :error="v$.description.$error"
        :error-messages="v$.description.$errors[0]?.$message"
      />
    </div>

    <div class="project-create-form__field">
      <VRadioGroup
        v-model="project.is_visible"
        hide-details="auto"
        :error="v$.is_visible.$error"
        :error-messages="v$.is_visible.$errors[0]?.$message"
      >
        <UIRadio class="project-create-form__radio" size="large" :value="true">
          <template #label>
            <div class="project-create-form__radio-label">
              <NuxtIcon class="project-create-form__radio-label-icon" name="web" />
              <div>
                <div class="project-create-form__radio-label-title">Public</div>
                <div class="project-create-form__radio-label-text">
                  Anyone on the internet can see this project. You choose who can contribute.
                </div>
              </div>
            </div>
          </template>
        </UIRadio>

        <UIRadio class="project-create-form__radio" size="large" :value="false">
          <template #label>
            <div class="project-create-form__radio-label">
              <NuxtIcon class="project-create-form__radio-label-icon" name="lock-outline" />
              <div>
                <div class="project-create-form__radio-label-title">Private</div>
                <div class="project-create-form__radio-label-text">
                  You choose who can see and contribute to this project.
                </div>
              </div>
            </div>
          </template>
        </UIRadio>
      </VRadioGroup>
    </div>

    <EntityCommonErrors v-if="commonErrors.length" class="project-create-form__common-errors">
      <div v-for="error in commonErrors" :key="error">{{ error }}</div>
    </EntityCommonErrors>

    <div class="project-create-form__button-block">
      <UIButton size="large" :loading="isLoading" @click="create">Create project</UIButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCreateProjectStore } from '@/entities/project/stores/createProject'

const createProjectStore = useCreateProjectStore()
const { v$, isSlugify, isLoading, project, commonErrors } = storeToRefs(createProjectStore)
const { create } = createProjectStore
</script>

<style scoped lang="scss">
.project-create-form {
  width: 700px;

  &__title {
    @include h1;
    color: $text__text;
    margin-bottom: 24px;
  }

  &__field {
    margin-bottom: 16px;

    &:last-of-type {
      margin-bottom: 20px;
    }
  }

  &__field--input {
    width: 300px;
  }

  &__field--description {
    margin-top: -12px;
    margin-bottom: 20px;
  }

  &__label {
    @include form__input-label;
    color: $text__text--lighten-1;
    margin-bottom: 6px;

    span {
      font-weight: 400;
      margin-left: 4px;
    }
  }

  &__slug {
    display: flex;
  }

  &__link-toggle {
    margin-left: 8px;

    :deep(svg) {
      transform: rotate(90deg);
    }
  }

  &__radio {
    margin-bottom: 14px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &__radio-label {
    display: flex;
    align-items: center;
  }

  &__radio-label-icon {
    width: 24px;
    height: 24px;
    font-size: 0;
    margin-right: 6px;

    :deep(svg) {
      width: 24px;
      height: 24px;
    }
  }

  &__radio-label-title {
    margin-bottom: 4px;
    @include form__input-label;
    color: $text__text;
  }

  &__radio-label-text {
    @include text-default;
    font-size: 13px;
    color: $text__text--lighten-2;
  }

  &__common-errors {
    margin-bottom: 16px;
  }

  &__button-block {
    display: flex;
    justify-content: right;
  }
}
</style>
