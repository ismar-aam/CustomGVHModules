"use strict";
/// <reference path="../../../Definitions/Framework.AMD.d.ts"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ViewBase_1 = require("geocortex/framework/ui/ViewBase");
var InteractWithWorkflowView = (function (_super) {
    __extends(InteractWithWorkflowView, _super);
    function InteractWithWorkflowView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InteractWithWorkflowView.prototype.handleClickExample = function (event, element, context) {
        // Execute the command "TestCommand".
        this.app.commandRegistry.command("TestCommand").execute("Hello");
    };
    return InteractWithWorkflowView;
}(ViewBase_1.ViewBase));
exports.InteractWithWorkflowView = InteractWithWorkflowView;
//# sourceMappingURL=InteractWithWorkflowView.js.map