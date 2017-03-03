"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var ng_spinning_preloader_constants_1 = require("./ng-spinning-preloader.constants");
var NgSpinningPreloader = NgSpinningPreloader_1 = (function () {
    function NgSpinningPreloader(document) {
        this.document = document;
        this.container = this.document.querySelector(ng_spinning_preloader_constants_1.CONTAINER_QUERY);
    }
    NgSpinningPreloader.prototype.start = function () {
        this.container.classList.remove(ng_spinning_preloader_constants_1.COMPLETE_CLASS_NAME);
    };
    NgSpinningPreloader.prototype.stop = function () {
        this.container.classList.add(ng_spinning_preloader_constants_1.COMPLETE_CLASS_NAME);
    };
    Object.defineProperty(NgSpinningPreloader.prototype, "container", {
        get: function () {
            return this._container;
        },
        set: function (element) {
            if (!element) {
                NgSpinningPreloader_1.errorHandler();
            }
            this._container = element || this.document.createElement(ng_spinning_preloader_constants_1.EMULATE_ELEMENT_NAME);
        },
        enumerable: true,
        configurable: true
    });
    NgSpinningPreloader.errorHandler = function () {
        throw new TypeError(ng_spinning_preloader_constants_1.TYPE_ERROR_CONTAINER_WAS_NOT_FOUND_MESSAGE);
    };
    return NgSpinningPreloader;
}());
NgSpinningPreloader = NgSpinningPreloader_1 = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [Object])
], NgSpinningPreloader);
exports.NgSpinningPreloader = NgSpinningPreloader;
var NgSpinningPreloader_1;
//# sourceMappingURL=ng-spinning-preloader.service.js.map