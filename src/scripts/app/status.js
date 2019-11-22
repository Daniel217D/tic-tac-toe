import {statuses} from './dictionary';

const status_container = document.querySelector(".js-status");

export function set_status(status) {
    status_container.innerText = statuses[status];
}
