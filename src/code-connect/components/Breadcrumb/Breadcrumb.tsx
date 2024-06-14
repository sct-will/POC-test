import { Breadcrumb } from "@carbon/react"
import { BreadcrumbItem } from "@carbon/react"
import {
    BreadcrumbItem,
    OverflowMenu,
    OverflowMenuItem,
} from "@carbon/react"

// Disclaimer: Code Connect is currently in beta and integration with Carbon
// React is in an exploratory phase. Code sample below may be incomplete.
<Breadcrumb>
    <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
    <BreadcrumbItem href="#">Breadcrumb</BreadcrumbItem>
    <BreadcrumbItem isCurrentPage>
        Breadcrumb
    </BreadcrumbItem>
</Breadcrumb>