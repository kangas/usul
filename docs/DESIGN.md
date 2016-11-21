Technical Design of Usul

Usul provides an ES6 Promise-based API for retrieving public remote datasets, plus a local document cache.

Initially we focus on access to the SEC EDGAR datasets, which is publicly accessible via FTP.

We create a top level module for each remote source. Let's call these "source modules". The initial source module is:

`usul.edgar`

Within each source module, we shall create methods which correspond to named documents available on the remote system. We shall aim for a direct mapping of document names.