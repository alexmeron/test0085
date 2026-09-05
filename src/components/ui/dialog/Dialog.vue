<script setup lang="ts">
import { computed } from 'vue'
import { X } from 'lucide-vue-next'
import { Button } from '../button'
import { Overlay } from '../overlay'
import { dialogVariants, type DialogVariants } from './dialogVariants'
import styles from './Dialog.module.css'
import { cn } from '../../../lib/utils'

interface Props {
  mode?: DialogVariants['mode']
  title?: string
  description?: string
  showHeader?: boolean
  showCloseButton?: boolean
  showDescription?: boolean
  showDividerTop?: boolean
  showBody?: boolean
  showDividerBottom?: boolean
  showFooter?: boolean
  secondaryAction?: boolean
  secondaryActionText?: string
  cancelText?: string
  confirmText?: string
  asModal?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  mode: 'dialog',
  title: 'Dialog title',
  description: 'Optional description goes here.',
  showHeader: true,
  showCloseButton: true,
  showDescription: true,
  showDividerTop: true,
  showBody: true,
  showDividerBottom: true,
  showFooter: true,
  secondaryAction: true,
  secondaryActionText: 'Secondary action',
  cancelText: 'Cancel',
  confirmText: 'Confirm',
  asModal: false,
})

const emits = defineEmits<{
  (e: 'close'): void
  (e: 'cancel'): void
  (e: 'confirm'): void
}>()

const computedPanelClass = computed(() =>
  cn(dialogVariants({ mode: props.mode }), props.class)
)
</script>

<template>
  <!-- Modal version with Overlay teleported to body -->
  <Teleport to="body" v-if="asModal">
    <Overlay position="fixed" @click.self="emits('close')">
      <div :class="computedPanelClass" role="dialog" aria-modal="true">
        <!-- Header -->
        <div v-if="showHeader" :class="styles.header">
          <div :class="styles.titleCol">
            <h2 :class="styles.title">
              <slot name="title">{{ title }}</slot>
            </h2>
            <p v-if="showDescription" :class="styles.description">
              <slot name="description">{{ description }}</slot>
            </p>
          </div>
          <button
            v-if="showCloseButton"
            type="button"
            :class="styles.closeButton"
            aria-label="Cerrar"
            @click="emits('close')"
          >
            <X style="width: 16px; height: 16px;" />
          </button>
        </div>

        <!-- Divider Top -->
        <div v-if="showDividerTop" :class="styles.dividerWrapperTop">
          <hr :class="styles.dividerLine" />
        </div>

        <!-- Body Slot -->
        <div v-if="showBody" :class="styles.body">
          <slot>
            <p style="color: var(--color-text-secondary); margin: 0;">
              ↳ Body slot — add content here
            </p>
          </slot>
        </div>

        <!-- Divider Bottom -->
        <div v-if="showDividerBottom" :class="styles.dividerWrapperBottom">
          <hr :class="styles.dividerLine" />
        </div>

        <!-- Footer -->
        <div v-if="showFooter" :class="styles.footer">
          <div v-if="secondaryAction && mode === 'dialog'" :class="styles.statusContainer">
            <span :class="styles.statusDot" />
            <span :class="styles.statusText">{{ secondaryActionText }}</span>
          </div>
          <div :class="styles.actions">
            <Button variant="outlined" size="lg" @click="emits('cancel')">
              {{ cancelText }}
            </Button>
            <Button variant="primary" size="lg" @click="emits('confirm')">
              {{ confirmText }}
            </Button>
          </div>
        </div>
      </div>
    </Overlay>
  </Teleport>

  <!-- Non-modal direct container for inline layouts and static docs -->
  <div v-else :class="computedPanelClass" role="region">
    <!-- Header -->
    <div v-if="showHeader" :class="styles.header">
      <div :class="styles.titleCol">
        <h2 :class="styles.title">
          <slot name="title">{{ title }}</slot>
        </h2>
        <p v-if="showDescription" :class="styles.description">
          <slot name="description">{{ description }}</slot>
        </p>
      </div>
      <button
        v-if="showCloseButton"
        type="button"
        :class="styles.closeButton"
        aria-label="Cerrar"
        @click="emits('close')"
      >
        <X style="width: 16px; height: 16px;" />
      </button>
    </div>

    <!-- Divider Top -->
    <div v-if="showDividerTop" :class="styles.dividerWrapperTop">
      <hr :class="styles.dividerLine" />
    </div>

    <!-- Body Slot -->
    <div v-if="showBody" :class="styles.body">
      <slot>
        <p style="color: var(--color-text-secondary); margin: 0;">
          ↳ Body slot — add content here
        </p>
      </slot>
    </div>

    <!-- Divider Bottom -->
    <div v-if="showDividerBottom" :class="styles.dividerWrapperBottom">
      <hr :class="styles.dividerLine" />
    </div>

    <!-- Footer -->
    <div v-if="showFooter" :class="styles.footer">
      <div v-if="secondaryAction && mode === 'dialog'" :class="styles.statusContainer">
        <span :class="styles.statusDot" />
        <span :class="styles.statusText">{{ secondaryActionText }}</span>
      </div>
      <div :class="styles.actions">
        <Button variant="outlined" size="lg" @click="emits('cancel')">
          {{ cancelText }}
        </Button>
        <Button variant="primary" size="lg" @click="emits('confirm')">
          {{ confirmText }}
        </Button>
      </div>
    </div>
  </div>
</template>
