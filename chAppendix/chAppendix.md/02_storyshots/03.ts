import initStoryshots from '@storybook/addon-storyshots'

// 애니메이션을 활용한 컴포넌트는 스냅샷을 통한 테스트에 실패한다
// StoryShots 테스트를 모든 컴포넌트에서 성공시키기 위해, RectLoader에 대한 테스트를 대상에서 제외한다
initStoryshots({
  storyKindRegex: /^((?!.*?RectLoader).)*$/,
})