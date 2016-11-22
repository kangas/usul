Technical Design of Usul

Usul provides an ES6 Promise-based API for retrieving public remote datasets, plus a local document cache.

The initial public dataset which we focus on is SEC EDGAR. As of December 2016, the canonical guide on accessing EDGAR is https://www.sec.gov/edgar/searchedgar/accessing-edgar-data.htm

For each remote source, such as EDGAR, we will create a "source module." The initial source module is:

`usul.edgar`

Each source module shall contain methods which correspond directly to named documents available on the remote system. 

