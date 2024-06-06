import {
  Callout,
  PanelStack,
  ProgressBar,
  AnchorButton,
  Tooltip,
  Dialog,
  Drawer,
  Overlay,
  Alert,
  RadioGroup,
  Radio,
  ButtonGroup,
  TextArea,
  Intent,
  Position,
  Tab,
  Tabs,
  Toaster,
  Checkbox,
  NumericInput,
  FormGroup,
  HTMLSelect,
  ControlGroup,
  InputGroup,
  Navbar,
  NavbarHeading,
  NonIdealState,
  NavbarDivider,
  NavbarGroup,
  Alignment,
  Classes,
  Icon,
  Card,
  Elevation,
  Button,
} from "@blueprintjs/core";
import { Example, IExampleProps } from "@blueprintjs/docs-theme";
import {
  ColumnHeaderCell,
  Cell,
  Column,
  Table,
  Regions,
} from "@blueprintjs/table";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import gutils from "../../utils";
import { useState } from "react";
import {
  useStores,
  useAsObservableSource,
  useLocalStore,
  useObserver,
} from "mobx-react-lite";
import { Provider, observer, inject } from "mobx-react";
var createHistory = require("history").createBrowserHistory;
import {
  withRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
var { autorun, observable } = require("mobx");
import gstore from "../../store.js";
import "./index.less";
import UserLoginPanel from "../overlay_for_user_panel/UserLoginPanel";
import GFormInput from "../../components/GFormInput";
import Simple_table from "../simple_table";
import CallOutAndView from "../../components/CallOutAndView";
import _ from "lodash";
import moment from "moment";
import mapi from "../../../../../plugins/TranslateForJSON/frontend/kit/common_api";

const Drawer_for_device_maintenance = observer(() => {
  const drawerConfig = gstore.localDeviceConfig.drawer;
  const state = {
    autoFocus: true,
    canEscapeKeyClose: true,
    canOutsideClickClose: true,
    enforceFocus: true,
    hasBackdrop: true,
    isOpen: drawerConfig.open,
    size: "80%",
    position: Position.BOTTOM,
    usePortal: true,
    title: t(`Registered Devices Management`),
  };
  let internalStyle = { padding: "15px 20px", overflow: "auto" };
  let authStatus = gstore.preliAllData.authStatus;
  let [userList, onUserList] = useState([]);

  return (
    <Drawer
      className={"mydrawerclz"}
      icon="user"
      onClose={() => {
        drawerConfig.open = false;
      }}
      {...state}
    >
      <div style={{ margin: "6px 150px" }}>
        <Tabs vertical={true}></Tabs>
      </div>
    </Drawer>
  );
});

export default Drawer_for_device_maintenance;
