Design Goals of Usul

Usul is a human and programmatic interface to public data about corporations. We seek to enable individual humans and small-scale software, running on desktop computers, to access and analyze all information that is available about corporations.

It has been oft noted that corporations wield power over individual citizens. In addition to financial power, modern corporations often wield information power. Frequently corporations have access to tremendous information about individuals - starting with your credit report and extending to your personal tastes and preferences, often employed for advertising.

How may we turn the spyglass in the other direction, so that citizens may observe the corporations?

For publicly listed corporations in some industrialized nations, there exist public troves of information about corporations. In the USA, the Securities and Exchange Commission (SEC) maintains a system called [EDGAR][] which contains legally-required documents and disclosures by all publicly listed corporations. It is free to access for anyone with an internet connection - in a rudimentary form.

However, the EDGAR system itself provides a poor human experience for reading, learning, and analyzing these documents. The current experience is optimized for stability, lowest-denominator access, and fulfilling legal requirements. It is nearly the opposite of a joyful learning experience.

If one wishes to construct an improved human experience atop the raw EDGAR data, there is the additional complexity of accessing and parsing the data. EDGAR is available via the FTP protocol and the data formats are peculiar and low-tech. The raw data must be processed, and this is a wheel which seems to be reinvented by every team.

Usul aims to encapsulate and abstract:

- Documentation of what is available via EDGAR
- Data retrieval
- Caching of the raw data
- Parsing of the raw data
- Query mechanisms over the raw and parsed data

Once we have established a viable pattern for browsing EDGAR data, we will aim to add public corporate documentation from other countries around the world and abstract access to them similarly.

We aim to empower individual citizens to truly see and learn about public corporations.

[EDGAR]: https://www.sec.gov/edgar/searchedgar/webusers.htm