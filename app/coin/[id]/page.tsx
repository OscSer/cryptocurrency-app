import styles from "./page.module.css";

interface Props {
  params: {
    id: string;
  };
}

export default function CoinPage({ params }: Props) {
  return <h1>ID: {params.id}</h1>;
}
