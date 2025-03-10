import { deepCopy } from "@intlify/shared";
import { grey } from "vuetify/util/colors";
import {twColors} from "~/plugins/vuetify/tw-colors.js";

export const defaults = {
    VAppBar: {
        elevation: 1,
        height: 64,
        color: 'primary',
    },
    VApp : {
        margin: 0,
        padding: 0,
        height: 'fit-content',
        color: 'primary',
        background:'primary',
    },
    VApplication: {
        margin: 0,
        padding: 0,
        height: 'fit-content',
        color: 'background',
        background:'background',
    },
    // VIcon: {
    //   color: twColors.gray[500]
    // },
    VCard: {
        elevation: 0,
        color: 'surface',
    },
    VCardTitle: {
        margin: 0,
        padding: 0,
    },
    header: {
        color: 'surface2',
    },
    VFooter: {
        elevation: 0,
        height: 'fit-content',
        color: 'transparent',
    },
    VContainer: {
        elevation: 0,
        color: 'background',
    },

    VBtn: {
        color: "primary",
        variant: "flat",
        rounded: "xl",
    },
    
    VTextField: {
        variant: "solo-filled",
        elevation: 0,
        color: "white",
        background: "white",
        dense: "comfortable",
        rounded: "xl",
        size: "medium",
    },

    VAutocomplete: {
        color: "primary",
        variant: "outlined",
        density: "comfortable",
    },
    VBadge: {
        color: "primary",
        size: "medium",
    },
    VBanner: {
        elevation: 0,
        color: "surface",
        height: 60,
    },
    VBottomNavigation: {
        elevation: 3,
        color: "primary",
        height: 56,
    },
    VCheckbox: {
        color: "primary",
        density: "comfortable",
    },
    VChip: {
        color: "surface",
    },
    VDialog: {
        color: "surface",
        maxWidth: 600,
    },
    VDivider: {
        color: 'white',
        thickness: "1.5px",
    },
    VExpansionPanel: {
        color: "surface",
        elevation: 0,
        padding:0,
        margin:0,
    },
    VForm: {
        disabled: false,
    },
    VList: {
        color: "surface",
        density: "comfortable",
    },
    VListItem: {
        color: "surface",
        density: "comfortable",
    },
    VMenu: {
        color: "surface",
    },
    VNavigationDrawer: {
        color: "surface",
        width: 256,
    },
    VPagination: {
        color: "primary",
        density: "comfortable",
        padding:40,
    },
    VProgressCircular: {
        color: "primary",
        size: 40,
    },
    VRadioGroup: {
        color: "primary",
        density: "comfortable",
    },
    VSelect: {
        color: "primary",
        variant: "outlined",
        density: "comfortable",
    },
    VSlider: {
        color: "primary",
        trackColor: twColors.gray[300],
    },
    VSnackbar: {
        color: "surface",
        elevation: 2,
    },
    VSwitch: {
        color: "primary",
        density: "comfortable",
    },
    VTable: {
        elevation: 1,
        density: "comfortable",
    },
    VTabs: {
        color: "primary",
        density: "comfortable",
    },
    VTextarea: {
        color: "primary",
        variant: "outlined",
        density: "comfortable",
    },
    VTooltip: {
        color: "primary",
        size: "medium",
    },

};