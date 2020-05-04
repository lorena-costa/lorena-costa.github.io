import { NotifierOptions } from 'angular-notifier';

export const customNotifierOptions: NotifierOptions = {
    position: {
          horizontal: {
              position: 'right',
              distance: 20
          },
          vertical: {
              position: 'bottom',
              distance: 12,
              gap: 10
          }
      },
    // theme: 'material',
    behaviour: {
      autoHide: 3000,
      onClick: false,
      onMouseover: false,
      showDismissButton: true,
      stacking: false
    },
    animations: {
      enabled: true,
      show: {
        preset: 'slide',
        speed: 300,
        easing: 'ease'
      },
      hide: {
        preset: 'fade',
        speed: 300,
        easing: 'ease',
        offset: 50
      },
      shift: {
        speed: 300,
        easing: 'ease'
      },
      overlap: 150
    }
  };