import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { User, Bell, Shield, Sparkles } from 'lucide-vue-next'
import Tabs from './Tabs.vue'
import TabsList from './TabsList.vue'
import TabsTrigger from './TabsTrigger.vue'
import TabsContent from './TabsContent.vue'

/**
 * ## Tabs Component
 *
 * Componente de navegación por pestañas accesible basado en Radix Vue.
 * Mapeado 1:1 a Figma.
 *
 * 🔗 **[Ver en Figma (node 4003:515)](https://www.figma.com/design/O9JvjR2KKZusf3BxImqWuq/Components?node-id=4003-515)**
 *
 * ---
 *
 * ### 📐 Layout & Sizing
 *
 * | Elemento | Altura | Padding | Radio de Borde | Tipografía / Gap |
 * |---|---|---|---|---|
 * | **TabsList (Contenedor)** | `--sizing-11` (40px) | `--spacing-3` (4px) | `--radius-xl` (10px) | Background `--color-surface-subtle`, gap `--spacing-0` (0px) |
 * | **TabTrigger (Botón)** | `--sizing-10` (32px) | `--spacing-5` (8px) vert, `--spacing-6` (12px) horiz | `--radius-lg` (8px) | `--font-size-caption-big` (12px), gap `--spacing-4` (6px) |
 * | **Icono** | `--sizing-6` (12px) | - | - | Alineado al texto |
 * | **Badge (Chip)** | 20px | Sub-componente Chip `size="badge"` | `--radius-full` | Margen izquierdo `--spacing-1` |
 *
 * ---
 *
 * ### 🎨 Tokens de Color por Estado
 *
 * | Estado | Fondo | Borde | Texto |
 * |---|---|---|---|
 * | **Default** | `transparent` | `transparent` | `--color-text-tertiary` |
 * | **Hover** | `--color-wolf-100` | `transparent` | `--color-text-tertiary` |
 * | **Pressed** | `--color-wolf-200` | `transparent` | `--color-text-primary` |
 * | **Focus** | `--color-surface-default` | `1px solid var(--color-border-default)` | `--color-text-primary`, outline `--color-border-focus` |
 * | **Current / Active** | `--color-surface-default` | `1px solid var(--color-border-default)` | `--color-text-primary`, weight `--font-weight-medium`, shadow `--shadow-elevation-sm` |
 */
const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    setup() {
      const activeTab = ref('account')
      return { activeTab }
    },
    template: `
      <div style="max-width: 500px; padding: var(--spacing-6);">
        <Tabs v-model="activeTab">
          <TabsList>
            <TabsTrigger value="account" label="Mi Cuenta" />
            <TabsTrigger value="notifications" label="Notificaciones" />
            <TabsTrigger value="security" label="Seguridad" />
          </TabsList>

          <TabsContent value="account">
            <div style="padding: var(--spacing-6); background: var(--color-surface-subtle); border-radius: var(--radius-lg); margin-top: var(--spacing-4);">
              <h4 style="margin: 0 0 var(--spacing-3) 0; color: var(--color-text-primary);">Configuración de Cuenta</h4>
              <p style="margin: 0; color: var(--color-text-secondary); font-size: var(--font-size-text-small);">Administra la información de tu perfil y preferencias personales.</p>
            </div>
          </TabsContent>

          <TabsContent value="notifications">
            <div style="padding: var(--spacing-6); background: var(--color-surface-subtle); border-radius: var(--radius-lg); margin-top: var(--spacing-4);">
              <h4 style="margin: 0 0 var(--spacing-3) 0; color: var(--color-text-primary);">Preferencias de Notificaciones</h4>
              <p style="margin: 0; color: var(--color-text-secondary); font-size: var(--font-size-text-small);">Configura cómo y cuándo deseas recibir alertas.</p>
            </div>
          </TabsContent>

          <TabsContent value="security">
            <div style="padding: var(--spacing-6); background: var(--color-surface-subtle); border-radius: var(--radius-lg); margin-top: var(--spacing-4);">
              <h4 style="margin: 0 0 var(--spacing-3) 0; color: var(--color-text-primary);">Ajustes de Seguridad</h4>
              <p style="margin: 0; color: var(--color-text-secondary); font-size: var(--font-size-text-small);">Gestiona tu contraseña y autenticación en dos factores.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    `,
  }),
}

export const WithIcons: Story = {
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    setup() {
      const activeTab = ref('profile')
      return { activeTab, User, Bell, Shield }
    },
    template: `
      <div style="max-width: 500px; padding: var(--spacing-6);">
        <Tabs v-model="activeTab">
          <TabsList>
            <TabsTrigger value="profile" label="Perfil" :icon="User" />
            <TabsTrigger value="alerts" label="Alertas" :icon="Bell" />
            <TabsTrigger value="privacy" label="Privacidad" :icon="Shield" />
          </TabsList>
        </Tabs>
      </div>
    `,
  }),
}

export const WithChips: Story = {
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger, TabsContent },
    setup() {
      const activeTab = ref('inbox')
      return { activeTab, Bell, Sparkles }
    },
    template: `
      <div style="max-width: 500px; padding: var(--spacing-6);">
        <Tabs v-model="activeTab">
          <TabsList>
            <TabsTrigger value="inbox" label="Bandeja" :chip="3" chip-state="destructive" />
            <TabsTrigger value="updates" label="Actualizaciones" :chip="12" chip-state="info" />
            <TabsTrigger value="archived" label="Archivados" />
          </TabsList>
        </Tabs>
      </div>
    `,
  }),
}

export const AllStates: Story = {
  render: () => ({
    components: { Tabs, TabsList, TabsTrigger },
    template: `
      <div style="display: flex; flex-direction: column; gap: var(--spacing-6); padding: var(--spacing-6); max-width: 600px;">
        <div style="display: flex; align-items: center; gap: var(--spacing-6);">
          <span style="width: 100px; font-size: var(--font-size-caption-big); color: var(--color-text-secondary); font-family: var(--font-family-body);">Default:</span>
          <Tabs default-value="other">
            <TabsList>
              <TabsTrigger value="def" state="default" label="Tab label" />
            </TabsList>
          </Tabs>
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-6);">
          <span style="width: 100px; font-size: var(--font-size-caption-big); color: var(--color-text-secondary); font-family: var(--font-family-body);">Hover:</span>
          <Tabs default-value="other">
            <TabsList>
              <TabsTrigger value="hov" state="hover" label="Tab label" />
            </TabsList>
          </Tabs>
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-6);">
          <span style="width: 100px; font-size: var(--font-size-caption-big); color: var(--color-text-secondary); font-family: var(--font-family-body);">Pressed:</span>
          <Tabs default-value="other">
            <TabsList>
              <TabsTrigger value="pre" state="pressed" label="Tab label" />
            </TabsList>
          </Tabs>
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-6);">
          <span style="width: 100px; font-size: var(--font-size-caption-big); color: var(--color-text-secondary); font-family: var(--font-family-body);">Focus:</span>
          <Tabs default-value="other">
            <TabsList>
              <TabsTrigger value="foc" state="focus" label="Tab label" />
            </TabsList>
          </Tabs>
        </div>
        <div style="display: flex; align-items: center; gap: var(--spacing-6);">
          <span style="width: 100px; font-size: var(--font-size-caption-big); color: var(--color-text-secondary); font-family: var(--font-family-body);">Current:</span>
          <Tabs default-value="cur">
            <TabsList>
              <TabsTrigger value="cur" state="current" label="Tab label" />
            </TabsList>
          </Tabs>
        </div>
      </div>
    `,
  }),
}

