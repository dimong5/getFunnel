import { Player } from '@/components/Player'
import styles from './page.module.scss'
import { ChangeTheme } from '@/components/ChangeTheme'
import { ViewFunnelObjectType, resolve } from "@/gqty";

const recreateObject = function <T>(obj: T): T {
  if (obj === null) return obj;
  if (typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(recreateObject) as T;
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, recreateObject(value)])
  ) as any;
};

const prepare = ({ ...others }: ViewFunnelObjectType) => {
  return {
    ...recreateObject(others),
  };
};


export default async function Home() {
  const funnel = await resolve(({ query: { viewFunnel } }) =>
    prepare(viewFunnel({ data: { code: "untitled-ptzkmh" } }))
  );
  return (
    <div className={styles.main}>
      <Player funnel={funnel} />
      <ChangeTheme />
    </div>
  )
}
