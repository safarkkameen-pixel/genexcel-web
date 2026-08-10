import { ScrollReveal } from "@/components/react-bits/ScrollReveal/ScrollReveal";
import { helixChatDemo } from "@/content/data/helix";
import styles from "./ChatDemo.module.scss";

/**
 * An illustrative exchange (not a live, functioning chat) showing how
 * Helix teaches from a textbook rather than general knowledge — plan
 * §11.3. Each bubble reveals in sequence via ScrollReveal.
 */
export function ChatDemo() {
  return (
    <div className={styles.demo}>
      <p className={styles.caption}>An illustrative example</p>
      <div className={styles.thread}>
        {helixChatDemo.map((message, index) => (
          <ScrollReveal key={index} delay={index * 120}>
            <div
              className={[styles.bubble, message.from === "helix" ? styles.helix : styles.student].join(
                " "
              )}
            >
              <span className={styles.speaker}>{message.from === "helix" ? "Helix" : "Student"}</span>
              <p className={styles.text}>{message.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
