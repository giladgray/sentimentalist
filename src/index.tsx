import * as cn from "classnames";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Button, Classes, FocusStyleManager, Intent, NonIdealState } from "@blueprintjs/core";
import { csstips, style, theme } from "./styles";

FocusStyleManager.onlyShowFocusOnTabs();

function reload() {
    render(
        <NonIdealState
            action={<Button intent={Intent.SUCCESS} text="Login with Spotify" />}
            description="how do you really feel about your music"
            title="Sentimentalist"
            visual="music"
        />
    );
}

function render(gallery: React.ReactElement<any>) {
  ReactDOM.render(
    <div className={cn(Classes.DARK, style(csstips.fillParent, theme.background))}>{gallery}</div>,
    document.querySelector("#sentimentalist"),
  );
}

csstips.normalize();
csstips.setupPage("#sentimentalist");

window.addEventListener("hashchange", reload);
reload();
