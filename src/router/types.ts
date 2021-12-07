import React from 'react';
import { RouteChildrenProps, RouteComponentProps } from 'react-router-dom';

export interface RouteProps {
  component?: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  render?: ((props: RouteComponentProps<any>) => React.ReactNode);
  children?: ((props: RouteChildrenProps<any>) => React.ReactNode) | React.ReactNode;
  path?: string | string[];
  exact?: boolean;
  sensitive?: boolean;
  strict?: boolean;
  getPath?: (...args: Array<string | number>) => string
}

export type GetParamsOfRoute<R extends RouteProps['getPath']> = R extends null | undefined ? never : Parameters<R extends null | undefined ? never : R>;

// type a = GetParamsOfRoute<typeof ROUTER_CONFIG.SCHOOL_INVITE.getPath>
