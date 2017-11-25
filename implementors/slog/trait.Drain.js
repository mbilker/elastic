(function() {var implementors = {};
implementors["slog"] = [];
implementors["slog_envlogger"] = ["impl&lt;T:&nbsp;<a class=\"trait\" href=\"slog/trait.Drain.html\" title=\"trait slog::Drain\">Drain</a>&gt; <a class=\"trait\" href=\"slog/trait.Drain.html\" title=\"trait slog::Drain\">Drain</a> for <a class=\"struct\" href=\"slog_envlogger/struct.EnvLogger.html\" title=\"struct slog_envlogger::EnvLogger\">EnvLogger</a>&lt;T&gt;",];
implementors["slog_extra"] = ["impl <a class=\"trait\" href=\"slog/trait.Drain.html\" title=\"trait slog::Drain\">Drain</a> for <a class=\"struct\" href=\"slog_extra/struct.Async.html\" title=\"struct slog_extra::Async\">Async</a>",];
implementors["slog_stdlog"] = ["impl <a class=\"trait\" href=\"slog/trait.Drain.html\" title=\"trait slog::Drain\">Drain</a> for <a class=\"struct\" href=\"slog_stdlog/struct.StdLog.html\" title=\"struct slog_stdlog::StdLog\">StdLog</a>",];
implementors["slog_stream"] = ["impl&lt;W:&nbsp;'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>, F:&nbsp;<a class=\"trait\" href=\"slog_stream/trait.Format.html\" title=\"trait slog_stream::Format\">Format</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"slog/trait.Drain.html\" title=\"trait slog::Drain\">Drain</a> for <a class=\"struct\" href=\"slog_stream/struct.Streamer.html\" title=\"struct slog_stream::Streamer\">Streamer</a>&lt;W, F&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
