declare module "framework7-react" {
    import * as React from "react";

    export type strnum = string | number;
    export type strbool = string | boolean;

    /** TODO */
    export interface STUB {
        [name: string]: any;
    }

    export interface IdProps {
        id?: strnum;
    }

    export interface ColorProps {
        color?: string;
        colorTheme?: string;
        textColor?: string;
        bgColor?: string;
        borderColor?: string;
        rippleColor?: string;
        themeDark?: boolean;
    }

    export interface LinkIconProps {
        icon?: string;
        iconMaterial?: string;
        iconIon?: string;
        iconFa?: string;
        iconF7?: string;
        iconIfMd?: string;
        iconIfIos?: string;
        iconIos?: string;
        iconMd?: string;
        iconColor?: string;
        iconSize?: strnum;
    }

    export interface LinkRouterProps {
        back?: boolean;
        external?: boolean;
        force?: boolean;
        animate?: boolean;
        ignoreCache?: boolean;
        pageName?: string;
        reloadCurrent?: boolean;
        reloadAll?: boolean;
        reloadPrevious?: boolean;
        routeTabId?: string;
        view?: string;
    }

    export type LinkActionsProps = {
        searchbarEnable?: strbool;
        searchbarDisable?: strbool;
      
        searchbarClear?: strbool;
        searchbarToggle?: strbool;
      
        // Panel
        panelOpen?: strbool;
        panelClose?: strbool;
      
        // Popup
        popupOpen?: strbool;
        popupClose?: strbool;
      
        // Actions
        actionsOpen?: strbool;
        actionsClose?: strbool;
      
        // Popover
        popoverOpen?: strbool;
        popoverClose?: strbool;
      
        // Login Screen
        loginScreenOpen?: strbool;
        loginScreenClose?: strbool;
      
        // Picker
        sheetOpen?: strbool;
        sheetClose?: strbool;
      
        // Sortable
        sortableEnable?: strbool;
        sortableDisable?: strbool;
        sortableToggle?: strbool;
    }

    export interface F7Params {
        [name: string]: any;
    }

    export interface Route {
        [name: string]: any;
    }

    export interface BasicProps extends IdProps, ColorProps { }

    export class _BasicComponent<P = {}> extends React.Component<BasicProps & P> { }

    export type Event<Name extends string> = {
        [name in Name]?: (el: HTMLElement) => any;
    }

    export type Flag<Name extends string> = {
        [name in Name]?: boolean;
    }

    export interface SwipeData {
        currentPageEl: HTMLElement;
        previousPageEl: HTMLElement;
        currentNavbarEl: HTMLElement;
        previousNavbarEl: HTMLElement;
    }

    export type SwipeEvent<Name extends string> = {
        [name in Name]?: (data: SwipeData) => any;
    }

    export interface SwipingData extends SwipeData {
        percentage: number;
    }

    export type SwipingEvent<Name extends string> = {
        [name in Name]?: (data: SwipingData) => any;
    }

    export type OpenCloseEvents = Event<"onOpen" | "onOpened" | "onClose" | "onClosed">;
    export type OnClick = Event<"onClick">;
    export type OnChange = Event<"onChange">;

    export class F7AccordionContent extends _BasicComponent {}
    export class F7AccordionItem extends _BasicComponent<Flag<"opened"> & OpenCloseEvents> { }
    export class F7AccordionToggle extends _BasicComponent { }
    export class F7Accordion extends _BasicComponent { }
    export class F7ActionsButton extends _BasicComponent<Flag<"bold" | "close"> & OnClick> { }
    export class F7ActionsGroup extends _BasicComponent { }
    export class F7ActionsLabel extends _BasicComponent<Flag<"bold"> & OnClick> { }
    export class F7Actions extends _BasicComponent<Flag<"opened" | "grid" | "convertToPopover" | "forceToPopover"> & {target: string | object} & OpenCloseEvents> { }
    export class F7App extends _BasicComponent<{params?: F7Params; routes?: Route[]}> { }
    export class F7Badge extends _BasicComponent { }
    export class F7BlockFooter extends _BasicComponent { }
    export class F7BlockHeader extends _BasicComponent { }
    export class F7BlockTitle extends _BasicComponent { }
    export class F7Block extends _BasicComponent<Flag< "inset" | "tabletInset" | "strong" | "tabs" | "tab" | "tabActive" | "accordionList" | "noHairlines" | "noHairlinesMd" | "noHairlinesIos"> & Event<"onTabShow" | "onTabHide">> { }
    export class F7Button extends _BasicComponent<
        {
            text?: string;
            tabLink?: strbool;
            href?: strbool;
        }
        &
        Flag<"noFastclick" | "noFastClick" | "tabLinkActive" | "round" | "roundMd" | "roundIos" | "fill" | "fillMd" | "fillIos" | "big" | "bigMd" | "bigIos" | "small" | "smallMd" | "smallIos" | "raised" | "outline" | "active" | "disabled">
        &
        OnClick
        &
        LinkIconProps & LinkRouterProps & LinkActionsProps
    > { }
    export class F7CardContent extends _BasicComponent<Flag<"padding">> { }
    export class F7CardFooter extends _BasicComponent { }
    export class F7CardHeader extends _BasicComponent { }
    export class F7Card extends _BasicComponent<{
        title?: strnum;
        content?: strnum;
        footer?: strnum;
        padding?: boolean;
    }> { }
    export class F7Checkbox extends _BasicComponent<{name: strnum; value: strnum | boolean} & Flag<"checked" | "disabled" | "readonly" | "defaultChecked"> & OnChange> { }
    export class F7Chip extends _BasicComponent<
        {
            media?: string;
            text?: strnum;
            deleteable?: boolean;
            mediaBgColor?: string;
            mediaTextColor?: string;
        }
        &
        Event<"onClick" | "onDeleteClick">
    > { }
    export class F7Col extends _BasicComponent<
        {
            tag?: string;
            width?: strnum;
            tabletWidth?: strnum;
            desktopWidth?: strnum;
        }
        &
        OnClick
    > { }
    export class F7FabButton extends _BasicComponent<Flag<"fabClose"> & OnClick> { }
    export class F7FabButtons extends _BasicComponent<{position?: string}> { }
    export class F7Fab extends _BasicComponent<{morphTo?: string; href?: strbool; position?: string} & OnClick> { }
    export class F7Icon extends _BasicComponent<{
        material?: string,
        f7?: string,
        ion?: string,
        fa?: string,
        icon?: string,
        ifMd?: string,
        ifIos?: string,
        ios?: string,
        md?: string,
        size?: strnum;
    }> { }
    export class F7Input extends _BasicComponent<
        {
            type?: string;
            name?: string;
            value?: strnum | strnum[];
            defaultValue?: strnum | strnum[];
            placeholder?: string;
            inputId?: strnum;
            size?: strnum;
            accept?: strnum;
            autocomplete?: string[];
            autocorrect?: string[];
            autocapitalize?: string[];
            spellcheck?: string[];
            autofocus?: boolean;
            autosave?: string;
            checked?: boolean;
            disabled?: boolean;
            max?: strnum;
            min?: strnum;
            step?: strnum;
            maxlength?: strnum;
            minlength?: strnum;
            multiple?: boolean;
            readonly?: boolean;
            required?: boolean;
            inputStyle?: string;
            pattern?: string;
            validate?: strbool;
            tabindex?: strnum;
            resizable?: boolean;
            clearButton?: boolean;
            noFormStoreData?: boolean;
            noStoreData?: boolean;
            errorMessage?: string;
            info?: string;
            wrap?: boolean;
        }
        &
        Event<"onFocus" | "onBlur" | "onInput" | "onChange" | "onTextareaResize" | "onInputNotEmpty" | "onInputEmpty" | "onInputClear">
    > { }
    export class F7Label extends _BasicComponent<Flag<"floating" | "inline">> { }
    export class F7Link extends _BasicComponent<
        {
            text?: string;
            tabLink?: strbool;
            badge?: strnum;
            badgeColor?: string[];
            iconBadge?: strnum;
            href?: strbool;
        } &
        Flag<"noLinkClass" | "noFastClick" | "noFastclick" | "tabLinkActive" | "tabbarLabel" | "iconOnly"> &
        LinkIconProps & LinkRouterProps & LinkActionsProps &
        OnClick
    > { }
    export class F7ListButton extends _BasicComponent<
        {
            title?: strnum;
            text?: strnum;
            tabLink?: strbool;
            link?: strbool;
            href?: strbool;
            target?: string;
        } &
        Flag<"noFastClick" | "noFastclick" | "tabLinkActive"> &
        LinkRouterProps & LinkActionsProps
    > { }
    export class F7ListGroup extends _BasicComponent<Flag<"mediaList" | "sortable">> { }
    export class F7ListIndex extends _BasicComponent<
        {
            listEl?: string | object;
            indexes?: string | string[];
            iosItemHeight?: number;
            mdItemHeight?: number;
        } &
        Flag<"init" | "scrollList" | "label">
    > { }
    export class F7ListItemCell extends _BasicComponent { }
    export class F7ListItemContent extends _BasicComponent<
        {
            title?: strnum;
            text?: strnum;
            media?: string;
            subtitle?: strnum;
            header?: strnum;
            footer?: strnum;
            after?: strnum;
            badge?: strnum;
            badgeColor?: string;
            name?: string;
            value?: strnum | strnum[];
        } &
        Flag<"mediaList" | "mediaItem" | "itemInput" | "itemInputWithInfo" | "inlineLabel" | "checkbox" | "checked" | "radio" | "readonly" | "required" | "disabled"> &
        OnClick & OnChange
    > { }
    export class F7ListItemRow extends _BasicComponent { }
    export class F7ListItem extends _BasicComponent<
        {
            title?: strnum;
            text?: strnum;
            media?: string;
            subtitle?: strnum;
            header?: strnum;
            footer?: strnum;
            link?: strbool;
            target?: string;
            after?: strnum;
            badge?: strnum;
            badgeColor?: string;
            smartSelectParams?: object;
            name?: string;
            value?: strnum | strnum[];
        }
        &
        Flag<"noFastclick" | "noFastClick" | "mediaItem" | "mediaList" | "divider" | "groupTitle" | "swipeout" | "swipeoutOpened" | "sortable" | "accordionItem" | "accordionItemOpened" | "smartSelect" | "checkbox" | "radio" | "checked" | "readonly" | "required" | "disabled" | "itemInput" | "itemInputWithInfo" | "inlineLabel">
        &
        Event<"onClick" | "onChange" | "onSwipeoutOpen" | "onSwipeoutOpened" | "onSwipeoutClose" | "onSwipeoutClosed" | "onSwipeoutDelete" | "onSwipeoutDeleted" | "onSwipeout" | "onAccOpen" | "onAccOpened" | "onAccClose" | "onAccClosed">
        &
        LinkRouterProps & LinkActionsProps
    > { }
    export class F7List extends _BasicComponent<
        {
            virtualListParams?: object;
            onSortableSort?: (indexes: Array<{from: number; to: number}>) => any;
        }
        &
        Flag<"inset" | "tabletInset" | "mediaList" | "sortable" | "sortableEnabled" | "accordionList" | "contactsList" | "simpleList" | "linksList" | "noHairlines" | "noHairlinesBetween" | "noHairlinesMd" | "noHairlinesBetweenMd" | "noHairlinesIos" | "noHairlinesBetweenIos" | "tab" | "tabActive" | "form" | "formStoreData" | "inlineLabels" | "virtualList">
        &
        Event<"onSortableEnable" | "onSortableDisable" | "onTabShow" | "onTabHide">
    > { }
    export class F7LoginScreenTitle extends _BasicComponent { }
    export class F7LoginScreen extends _BasicComponent<OpenCloseEvents & Flag<"opened">> { }
    export class F7Message extends _BasicComponent<STUB> { }
    export class F7MessagebarAttachment extends _BasicComponent<{image?: string} & Flag<"deletable"> & OnClick & Event<"onDeleteClick">> { }
    export class F7MessagebarAttachments extends _BasicComponent { }
    export class F7MessagebarSheetImage extends _BasicComponent<{image?: string} & Flag<"checked"> & OnChange> { }
    export class F7MessagebarSheetItem extends _BasicComponent { }
    export class F7MessagebarSheet extends _BasicComponent { }
    export class F7Messagebar extends _BasicComponent<STUB> { }
    export class F7MessagesTitle extends _BasicComponent { }
    export class F7Messages extends _BasicComponent<STUB> { }
    export class F7NavLeft extends _BasicComponent<STUB> { }
    export class F7NavRight extends _BasicComponent<Flag<"sliding">> { }
    export class F7NavTitle extends _BasicComponent<{title?: string; subtitle?: string} & Flag<"sliding">> { }
    export class F7Navbar extends _BasicComponent<STUB> { }
    export class F7PageContent extends _BasicComponent<STUB> { }
    export class F7Page extends _BasicComponent<STUB> { }
    export class F7Panel extends _BasicComponent<STUB> { }
    export class F7PhotoBrowser extends _BasicComponent<STUB> { }
    export class F7Popover extends _BasicComponent<{target?: string | object} & Flag<"opened"> & OpenCloseEvents> { }
    export class F7Popup extends _BasicComponent<Flag<"tabletFullscreen" | "opened"> & OpenCloseEvents> { }
    export class F7Preloader extends _BasicComponent<{size?: strnum}> { }
    export class F7Progressbar extends _BasicComponent<{progress?: number} & Flag<"infinite">> { }
    export class F7Radio extends _BasicComponent<STUB> { }
    export class F7Range extends _BasicComponent<STUB> { }
    export class F7RoutableModals extends React.Component { }
    export class F7Row extends _BasicComponent<{tag?: string} & Flag<"noGap"> & OnClick> { }
    export class F7Searchbar extends _BasicComponent<STUB> { }
    export class F7Segmented extends _BasicComponent<{tag?: string} & Flag<"raised" | "round">> { }
    export class F7Sheet extends _BasicComponent<Flag<"opened" | "backdrop"> & OpenCloseEvents> { }
    export class F7Statusbar extends _BasicComponent { }
    export class F7Stepper extends _BasicComponent<STUB> { }
    export class F7Subnavbar extends _BasicComponent<{title?: string} & Flag<"sliding" | "inner">> { }
    export class F7SwipeoutActions extends _BasicComponent<{side?: "left" | "right"} & Flag<"left" | "right">> { }
    export class F7SwipeoutButton extends _BasicComponent<{text?: string; confirmText?: string; href?: string} & Flag<"overswipe" | "close" | "delete"> & OnClick> { }
    export class F7SwiperSlide extends _BasicComponent<Flag<"zoom">> { }
    export class F7Swiper extends _BasicComponent<{params?: object} & Flag<"pagination" | "scrollbar" | "navigation" | "init">> { }
    export class F7Tab extends _BasicComponent<Event<"onTabShow" | "onTabHide"> & Flag<"tabActive">> { }
    export class F7Tabs extends _BasicComponent<Flag<"animated" | "swipeable" | "routable">> { }
    export class F7Toggle extends _BasicComponent<{name?: string; value?: strnum | strnum[]} & Flag<"init" | "checked" | "defaultChecked" | "disabled" | "readonly"> & OnChange> { }
    export class F7Toolbar extends _BasicComponent<Flag<"bottomMd" | "tabbar" | "labels" | "scrollable" | "hidden" | "noShadow" | "noHairline" | "inner">> { }
    export class F7View extends _BasicComponent<
        {
            tab?: boolean;
            tabActive?: boolean;
            name?: string;
            router?: boolean;
            linksView?: string | object;
            url?: string;
            main?: boolean;
            stackPages?: boolean;
            xhrCache?: string;
            xhrCacheIgnore?: string[];
            xhrCacheIgnoreGetParameters?: boolean;
            xhrCacheDuration?: number;
            preloadPreviousPage?: boolean;
            uniqueHistory?: boolean;
            uniqueHistoryIgnoreGetParameters?: boolean;
            allowDuplicateUrls?: boolean;
            reloadPages?: boolean;
            removeElements?: boolean;
            removeElementsWithTimeout?: boolean;
            removeElementsTimeout?: number;
            restoreScrollTopOnBack?: boolean;
            iosSwipeBack?: boolean;
            iosSwipeBackAnimateShadow?: boolean;
            iosSwipeBackAnimateOpacity?: boolean;
            iosSwipeBackActiveArea?: number;
            iosSwipeBackThreshold?: number;
            pushState?: boolean;
            pushStateRoot?: string;
            pushStateAnimate?: boolean;
            pushStateAnimateOnLoad?: boolean;
            pushStateSeparator?: string;
            pushStateOnLoad?: boolean;
            animate?: boolean;
            iosDynamicNavbar?: boolean;
            iosSeparateDynamicNavbar?: boolean;
            iosAnimateNavbarBackIcon?: boolean;
            materialPageLoadDelay?: number;
            passRouteQueryToRequest?: boolean;
            passRouteParamsToRequest?: boolean;
            routes?: Route[];
            routesAdd?: Route[];
            init?: boolean;
        } &
        SwipingEvent<"onSwipeBackMove"> &
        SwipeEvent<"onSwipeBackBeforeChange" | "onSwipeBackAfterChange" | "onSwipeBackBeforeReset" | "onSwipeBackAfterReset"> &
        Event<"onTabShow" | "onTabHide">
    > { }
    export class F7Views extends _BasicComponent<Flag<"tabs">> { }

    export const AccordionContent: typeof F7AccordionContent;
    export const AccordionItem: typeof F7AccordionItem;
    export const AccordionToggle: typeof F7AccordionToggle;
    export const Accordion: typeof F7Accordion;
    export const ActionsButton: typeof F7ActionsButton;
    export const ActionsGroup: typeof F7ActionsGroup;
    export const ActionsLabel: typeof F7ActionsLabel;
    export const Actions: typeof F7Actions;
    export const App: typeof F7App;
    export const Badge: typeof F7Badge;
    export const BlockFooter: typeof F7BlockFooter;
    export const BlockHeader: typeof F7BlockHeader;
    export const BlockTitle: typeof F7BlockTitle;
    export const Block: typeof F7Block;
    export const Button: typeof F7Button;
    export const CardContent: typeof F7CardContent;
    export const CardFooter: typeof F7CardFooter;
    export const CardHeader: typeof F7CardHeader;
    export const Card: typeof F7Card;
    export const Checkbox: typeof F7Checkbox;
    export const Chip: typeof F7Chip;
    export const Col: typeof F7Col;
    export const FabButton: typeof F7FabButton;
    export const FabButtons: typeof F7FabButtons;
    export const Fab: typeof F7Fab;
    export const Icon: typeof F7Icon;
    export const Input: typeof F7Input;
    export const Label: typeof F7Label;
    export const Link: typeof F7Link;
    export const ListButton: typeof F7ListButton;
    export const ListGroup: typeof F7ListGroup;
    export const ListIndex: typeof F7ListIndex;
    export const ListItemCell: typeof F7ListItemCell;
    export const ListItemContent: typeof F7ListItemContent;
    export const ListItemRow: typeof F7ListItemRow;
    export const ListItem: typeof F7ListItem;
    export const List: typeof F7List;
    export const LoginScreenTitle: typeof F7LoginScreenTitle;
    export const LoginScreen: typeof F7LoginScreen;
    export const Message: typeof F7Message;
    export const MessagebarAttachment: typeof F7MessagebarAttachment;
    export const MessagebarAttachments: typeof F7MessagebarAttachments;
    export const MessagebarSheetImage: typeof F7MessagebarSheetImage;
    export const MessagebarSheetItem: typeof F7MessagebarSheetItem;
    export const MessagebarSheet: typeof F7MessagebarSheet;
    export const Messagebar: typeof F7Messagebar;
    export const MessagesTitle: typeof F7MessagesTitle;
    export const Messages: typeof F7Messages;
    export const NavLeft: typeof F7NavLeft;
    export const NavRight: typeof F7NavRight;
    export const NavTitle: typeof F7NavTitle;
    export const Navbar: typeof F7Navbar;
    export const PageContent: typeof F7PageContent;
    export const Page: typeof F7Page;
    export const Panel: typeof F7Panel;
    export const PhotoBrowser: typeof F7PhotoBrowser;
    export const Popover: typeof F7Popover;
    export const Popup: typeof F7Popup;
    export const Preloader: typeof F7Preloader;
    export const Progressbar: typeof F7Progressbar;
    export const Radio: typeof F7Radio;
    export const Range: typeof F7Range;
    export const RoutableModals: typeof F7RoutableModals;
    export const Row: typeof F7Row;
    export const Searchbar: typeof F7Searchbar;
    export const Segmented: typeof F7Segmented;
    export const Sheet: typeof F7Sheet;
    export const Statusbar: typeof F7Statusbar;
    export const Stepper: typeof F7Stepper;
    export const Subnavbar: typeof F7Subnavbar;
    export const SwipeoutActions: typeof F7SwipeoutActions;
    export const SwipeoutButton: typeof F7SwipeoutButton;
    export const SwiperSlide: typeof F7SwiperSlide;
    export const Swiper: typeof F7Swiper;
    export const Tab: typeof F7Tab;
    export const Tabs: typeof F7Tabs;
    export const Toggle: typeof F7Toggle;
    export const Toolbar: typeof F7Toolbar;
    export const View: typeof F7View;
    export const Views: typeof F7Views;

    export interface Plugin {
        name: string;
        install(params: any): void;
    }
    const Framework7React: Plugin;

    export default Framework7React;
}
