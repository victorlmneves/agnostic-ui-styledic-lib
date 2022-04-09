declare const _default: import("vue").DefineComponent<{
    componentName: {
        type: import("vue").PropType<string>;
        required: true;
    } & {
        default: string;
    };
    text: {
        type: import("vue").PropType<string>;
        required: true;
    };
    ariaLabel: {
        type: import("vue").PropType<string>;
    } & {
        default: undefined;
    };
    type: {
        type: import("vue").PropType<"button" | "reset" | "submit">;
    } & {
        default: string;
    };
    priority: {
        type: import("vue").PropType<"primary" | "secondary" | "tertiary">;
    } & {
        default: string;
    };
    isDisabled: {
        type: import("vue").PropType<boolean>;
    } & {
        default: boolean;
    };
}, () => void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    componentName?: unknown;
    text?: unknown;
    ariaLabel?: unknown;
    type?: unknown;
    priority?: unknown;
    isDisabled?: unknown;
} & {
    type: "button" | "reset" | "submit";
    priority: "primary" | "secondary" | "tertiary";
    text: string;
    componentName: string;
    isDisabled: boolean;
} & {
    ariaLabel?: string | undefined;
}>, {
    type: "button" | "reset" | "submit";
    priority: "primary" | "secondary" | "tertiary";
    ariaLabel: string;
    componentName: string;
    isDisabled: boolean;
}>;
export default _default;
