import React from 'react';
// @ts-ignore
import * as Sentry from '@sentry/react';
type FallbackRender = (props: { error: Error | null }) => React.ReactElement;

// https://github.com/bvaughn/react-error-boundary
class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallbackRender: FallbackRender }>,
  { error: Error | null }
> {
  state = { error: null };
  // 当子组件抛出异常，这里会接收到并且调用
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;

    if (error) {
      console.log('发生报错:::');
      console.log(error);
      // Sentry.captureException(error);
      return fallbackRender({ error });
    }
    return children;
  }
}
export default ErrorBoundary;
