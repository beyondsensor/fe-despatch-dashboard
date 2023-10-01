import Link from "next/link"

import { PageContainer } from "@/components/common/page-container"
import { PageHeader } from "@/components/common/page-header"

export default function IndexPage() {
  return (
    <PageContainer>
        <PageHeader title={"Home Page"} 
                    description="Accessible and customizable components that you can copy and paste into
                                 your apps. Free. Open Source. And Next.js 13 Ready."
        />
    </PageContainer>
  )
}
