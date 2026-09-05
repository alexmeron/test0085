import { defineComponent, h } from 'vue'
import Icon from './Icon.vue'
import type { IconSize } from './Icon.vue'
import figmaIcons from '../../../assets/figmaIcons.json'

export { Icon }
export type { IconSize }
export { figmaIcons }

// Helper factory to create a named icon component
export function createIconComponent(name: string) {
  return defineComponent({
    name: `Icon_${name.replace(/[^a-zA-Z0-9]/g, '_')}`,
    props: {
      size: {
        type: [String, Number] as import('vue').PropType<IconSize>,
        default: undefined,
      },
      color: {
        type: String,
        default: undefined,
      },
      class: {
        type: String,
        default: undefined,
      },
    },
    setup(props) {
      return () =>
        h(Icon, {
          name,
          size: props.size,
          color: props.color,
          class: props.class,
        })
    },
  })
}

// Common Figma icons exported as convenient Vue components
export const SearchIcon = createIconComponent('Search_Magnifying_Glass')
export const CheckIcon = createIconComponent('Check')
export const CircleCheckIcon = createIconComponent('Circle_Check')
export const CloseIcon = createIconComponent('Close_MD')
export const CloseSmIcon = createIconComponent('Close_SM')
export const CloseLgIcon = createIconComponent('Close_LG')
export const InfoIcon = createIconComponent('Info')
export const WarningIcon = createIconComponent('Warning')
export const CircleWarningIcon = createIconComponent('Circle_Warning')
export const TriangleWarningIcon = createIconComponent('Triangle_Warning')
export const HelpIcon = createIconComponent('Help')
export const CircleHelpIcon = createIconComponent('Circle_Help')
export const ChevronLeftIcon = createIconComponent('Chevron_Left_MD')
export const ChevronRightIcon = createIconComponent('Chevron_Right_MD')
export const CaretDownIcon = createIconComponent('Caret_Down_MD')
export const CaretUpIcon = createIconComponent('Caret_Up_MD')
export const ArrowDownUpIcon = createIconComponent('Arrow_Down_Up')
export const ArrowRightIcon = createIconComponent('Arrow_Right_MD')
export const ArrowLeftIcon = createIconComponent('Arrow_Left_MD')
export const MoreVerticalIcon = createIconComponent('More_Vertical')
export const MoreHorizontalIcon = createIconComponent('More_Horizontal')
export const AddPlusIcon = createIconComponent('Add_Plus')
export const RemoveMinusIcon = createIconComponent('Remove_Minus')
export const TrashIcon = createIconComponent('Trash_Empty')
export const UserIcon = createIconComponent('User_01')
export const UsersIcon = createIconComponent('Users')
export const BellIcon = createIconComponent('Bell')
export const ShieldIcon = createIconComponent('Shield')
export const StarIcon = createIconComponent('Star')
export const GlobeIcon = createIconComponent('Globe')
export const MailIcon = createIconComponent('Mail')
export const Image01Icon = createIconComponent('Image_01')
export const WipIcon = createIconComponent('wip')
export const AdvancedIcon = createIconComponent('advanced')
export const StopSignIcon = createIconComponent('Stop_Sign')
export const ArrowCircleUpIcon = createIconComponent('Arrow_Circle_Up')
