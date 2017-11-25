(function() {var implementors = {};
implementors["elastic"] = ["impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"elastic/client/responses/struct.AsyncHttpResponse.html\" title=\"struct elastic::client::responses::AsyncHttpResponse\">AsyncHttpResponse</a>",];
implementors["futures"] = [];
implementors["hyper"] = ["impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"hyper/struct.Body.html\" title=\"struct hyper::Body\">Body</a>","impl&lt;I, S, B&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"hyper/server/struct.Serve.html\" title=\"struct hyper::server::Serve\">Serve</a>&lt;I, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&lt;Error = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;I::<a class=\"type\" href=\"futures/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures::stream::Stream::Item\">Item</a>: <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/trait.AsyncWrite.html\" title=\"trait tokio_io::AsyncWrite\">AsyncWrite</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"hyper/server/trait.NewService.html\" title=\"trait hyper::server::NewService\">NewService</a>&lt;Request = <a class=\"struct\" href=\"hyper/struct.Request.html\" title=\"struct hyper::Request\">Request</a>, Response = <a class=\"struct\" href=\"hyper/struct.Response.html\" title=\"struct hyper::Response\">Response</a>&lt;B&gt;, Error = <a class=\"enum\" href=\"hyper/error/enum.Error.html\" title=\"enum hyper::error::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&lt;Error = <a class=\"enum\" href=\"hyper/error/enum.Error.html\" title=\"enum hyper::error::Error\">Error</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;B::<a class=\"type\" href=\"futures/stream/trait.Stream.html#associatedtype.Item\" title=\"type futures::stream::Stream::Item\">Item</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;,&nbsp;</span>","impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"hyper/server/struct.AddrIncoming.html\" title=\"struct hyper::server::AddrIncoming\">AddrIncoming</a>",];
implementors["reqwest"] = ["impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"reqwest/unstable/async/struct.Body.html\" title=\"struct reqwest::unstable::async::Body\">Body</a>","impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"reqwest/unstable/async/struct.Decoder.html\" title=\"struct reqwest::unstable::async::Decoder\">Decoder</a>",];
implementors["tokio_core"] = ["impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_core/net/struct.Incoming.html\" title=\"struct tokio_core::net::Incoming\">Incoming</a>","impl&lt;C:&nbsp;<a class=\"trait\" href=\"tokio_core/net/trait.UdpCodec.html\" title=\"trait tokio_core::net::UdpCodec\">UdpCodec</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_core/net/struct.UdpFramed.html\" title=\"struct tokio_core::net::UdpFramed\">UdpFramed</a>&lt;C&gt;","impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_core/reactor/struct.Interval.html\" title=\"struct tokio_core::reactor::Interval\">Interval</a>",];
implementors["tokio_io"] = ["impl&lt;T, U&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/codec/struct.Framed.html\" title=\"struct tokio_io::codec::Framed\">Framed</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"tokio_io/codec/trait.Decoder.html\" title=\"trait tokio_io::codec::Decoder\">Decoder</a>,&nbsp;</span>","impl&lt;T, D&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/codec/struct.FramedRead.html\" title=\"struct tokio_io::codec::FramedRead\">FramedRead</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"tokio_io/codec/trait.Decoder.html\" title=\"trait tokio_io::codec::Decoder\">Decoder</a>,&nbsp;</span>","impl&lt;T, D&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/codec/struct.FramedWrite.html\" title=\"struct tokio_io::codec::FramedWrite\">FramedWrite</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>,&nbsp;</span>","impl&lt;T:&nbsp;<a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>, B:&nbsp;<a class=\"trait\" href=\"bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/codec/length_delimited/struct.Framed.html\" title=\"struct tokio_io::codec::length_delimited::Framed\">Framed</a>&lt;T, B&gt;","impl&lt;T:&nbsp;<a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/codec/length_delimited/struct.FramedRead.html\" title=\"struct tokio_io::codec::length_delimited::FramedRead\">FramedRead</a>&lt;T&gt;","impl&lt;T:&nbsp;<a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>, B:&nbsp;<a class=\"trait\" href=\"bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a>&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/codec/length_delimited/struct.FramedWrite.html\" title=\"struct tokio_io::codec::length_delimited::FramedWrite\">FramedWrite</a>&lt;T, B&gt;","impl&lt;A&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_io/io/struct.Lines.html\" title=\"struct tokio_io::io::Lines\">Lines</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tokio_io/trait.AsyncRead.html\" title=\"trait tokio_io::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.BufRead.html\" title=\"trait std::io::BufRead\">BufRead</a>,&nbsp;</span>",];
implementors["tokio_proto"] = ["impl&lt;T, E&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_proto/streaming/struct.Body.html\" title=\"struct tokio_proto::streaming::Body\">Body</a>&lt;T, E&gt;",];
implementors["tokio_timer"] = ["impl <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_timer/struct.Interval.html\" title=\"struct tokio_timer::Interval\">Interval</a>","impl&lt;T, E&gt; <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a> for <a class=\"struct\" href=\"tokio_timer/struct.TimeoutStream.html\" title=\"struct tokio_timer::TimeoutStream\">TimeoutStream</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"futures/stream/trait.Stream.html\" title=\"trait futures::stream::Stream\">Stream</a>&lt;Error = E&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"tokio_timer/enum.TimeoutError.html\" title=\"enum tokio_timer::TimeoutError\">TimeoutError</a>&lt;T&gt;&gt;,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
