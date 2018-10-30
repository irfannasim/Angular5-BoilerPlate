import {ToastOptions} from 'ng2-toastr';

export class CustomOption extends ToastOptions {
    animate = 'flyRight'; // 'fade', 'flyLeft' or 'flyRight'.
    newestOnTop = true;
    showCloseButton = true;
    maxShown = 10;
    toastLife= 3000;
}