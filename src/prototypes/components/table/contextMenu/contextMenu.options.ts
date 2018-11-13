import { InjectionToken } from '@angular/core';

export interface IContextMenuOptions {
  useBootstrap4: boolean;
}
export const CONTEXT_MENU_OPTIONS = new InjectionToken('CONTEXT_MENU_OPTIONS');
