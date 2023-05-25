import { Player } from '@/components/Player'
import styles from './page.module.scss'
import { ChangeTheme } from '@/components/ChangeTheme'
import { useQuery } from '@apollo/client';

export default function Home() {
  const funnelId = '60f3b0b9c9b7a1001b9f9b8a';

  // const { loading, data } = useQuery(VIEW_FUNNEL, {
  //   variables: {
  //     data: {
  //       code: slug ?? '',
  //     },
  //   },
  //   skip: !slug, // skip the query if slug is not defined
  //   onCompleted: (_data) => {
  //     setTenantId(_data?.viewFunnel.tenantId);
  //   },
  // });
  return (
    <div className={styles.main}>
      <Player />
      <ChangeTheme />
    </div>
  )
}
