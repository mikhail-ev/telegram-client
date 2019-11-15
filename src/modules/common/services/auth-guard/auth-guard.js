export const setAuthAsValid = () => localStorage.setItem('ui_authorized_flag', '1');
export const setAuthAsInValid = () => localStorage.setItem('ui_authorized_flag', '0');
export const isAuthValid = () => localStorage.getItem('ui_authorized_flag') === '1';
