import { Fonts } from "../bin/fonts";
import styles from "../styles/components/PriceComparison.module.scss";
import pricingData from "../data/pricing.json";
import Props from "../interfaces/Props";

function PriceComparisonSection({ children }: Props) {
  return (
    <div className={styles.sideComparison}>
      <div className={styles.sideTitleText}>{pricingData.interior.name}</div>
      <div className={styles.benefits}>
        {pricingData.interior.benefits.map((item) => (
          <div key={item} className={styles.benefit}>
            {item}
          </div>
        ))}
      </div>
      <div className={styles.price}>${pricingData.interior.price}</div>
    </div>
  );
}

function PriceComparison() {
  return (
    <div className={`${styles.div} ${Fonts.body}`}>
      <PriceComparisonSection />

      <div className={styles.centerComparison}>
        <div className={styles.titleText}>{pricingData.full.name}</div>
        <div className={styles.subtitleText}>
          {pricingData.full.description}
        </div>
        <div className={styles.benefits}>
          {pricingData.full.benefits.map((item) => (
            <div key={item} className={styles.benefit}>
              {item}
            </div>
          ))}
        </div>
        <div className={styles.price}>
          ${pricingData.full.price}
          <p>
            <a className={styles.accent}>*</a> {pricingData.full.note}
          </p>
        </div>
      </div>
      <div className={styles.sideComparison}>
        <div className={styles.sideTitleText}>{pricingData.exterior.name}</div>
        <div className={styles.benefits}>
          {pricingData.exterior.benefits.map((item) => (
            <div key={item} className={styles.benefit}>
              {item}
            </div>
          ))}
        </div>
        <div className={styles.price}>${pricingData.exterior.price}</div>
      </div>
    </div>
  );
}

export default PriceComparison;
