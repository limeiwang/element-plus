import makeMount from '../../test-utils/make-mount'
import Popover from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

const mount = makeMount(Popover, {
  slots: {
    default: AXIOM,
  },
})
describe('Popover.vue', () => {
  test('render test', () => {
    const wrapper = mount()
    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('should render with title', () => {
    const title = 'test title'
    const wrapper = mount({
      props: {
        title,
      },
    })

    expect(wrapper.text()).toContain(title)
  })

  test('should modify popover\'s style with width', async () => {
    const wrapper = mount({
      props: {
        width: 200,
      },
    })

    expect(wrapper.find('.el-popover').attributes('style')).toContain('width: 200px')

    await wrapper.setProps({
      width: '100vw',
    })


    expect(wrapper.find('.el-popover').attributes('style')).toContain('width: 100vw')
  })

  test('the content should be overrode by slots', () => {
    const content = 'test content'
    const wrapper = mount({
      props: {
        content,
      },
    })
    expect(wrapper.text()).toContain(AXIOM)
  })

  test('should render content when no slots were passed', () => {

    const content = 'test content'
    const wrapper = makeMount(Popover, {
      props: {
        content,
      },
    })()

    expect(wrapper.text()).toBe(content)
  })
})
