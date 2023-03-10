var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { notificationData } from "../../data/header.js";
import { Button } from "../../utils/buttonElement.js";
import { Container } from "../../utils/container.js";
import { Element } from "../../utils/element.js";
import { Modal } from "../templates/modal.js";
var Notification = /** @class */ (function (_super) {
    __extends(Notification, _super);
    function Notification() {
        var _this = _super.call(this, {
            text: notificationData.label, className: notificationData.className, onClick: function () {
                _this.toggleModal();
            }
        }) || this;
        return _this;
    }
    Notification.prototype.toggleModal = function () {
        Modal.open(this.customModal());
    };
    Notification.prototype.customModal = function () {
        var title = new Element({
            as: 'h1',
            content: 'Not found',
            attr: {
                "class": 'text-4xl'
            }
        });
        var container = new Container({
            variant: {
                type: 'flex',
                direction: 'col',
                gap: '2',
                justify: 'center',
                align: 'center'
            },
            children: [
                title,
                new Button({
                    text: 'Close',
                    onClick: function () {
                        Modal.close();
                    }
                })
            ]
        });
        return container;
    };
    return Notification;
}(Button));
export { Notification };
