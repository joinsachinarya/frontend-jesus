"In JavaScript, event propagation has two phases — capturing and bubbling.
In capturing, event goes from top to the target element.
In bubbling, event starts from target and bubbles up to ancestors.
JavaScript by default uses bubbling, but we can use capturing by passing true as third argument in addEventListener."

"Capturing is useful in rare advanced use-cases like global analytics, or stopping events before they reach target.
Bubbling is commonly used in patterns like event delegation."