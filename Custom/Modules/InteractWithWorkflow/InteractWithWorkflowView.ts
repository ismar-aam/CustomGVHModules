/// <reference path="../../../Definitions/Framework.AMD.d.ts"/>

import { ViewBase } from "geocortex/framework/ui/ViewBase";

export class InteractWithWorkflowView extends ViewBase {
    handleClickExample(event: Event, element: Element, context): void {
        // Execute the command "TestCommand".
        this.app.commandRegistry.command("TestCommand").execute("Hello");
    }
}