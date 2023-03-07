serve:
	live-server

sass:
	sass --watch scss/style.scss style.css

local:
	make -j 2 serve sass

.PHONY: local
