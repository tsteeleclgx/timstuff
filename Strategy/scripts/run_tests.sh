#!/bin/bash -ex
BASE_DIR=`dirname $0`

if [ "`uname`" = "Darwin" ]; then
	export JAVA_HOME=$(/usr/libexec/java_home 1.7)
fi

case "$(uname)" in
	Darwin)
		# Make sure that we have the desired character set; if invoked from within X Window
		# these come out with locale "C" but Mac terminals have UTF-8.
		export LANG=en_US.UTF-8
		export LC_ALL=en_US.UTF-8
		;;
esac

SPRING_PROFILES_ACTIVE=test ./gradlew -i clean check build

$BASE_DIR/../node_modules/.bin/karma start $BASE_DIR/../config/karma.conf.js --single-run

cat <<EOF

                                                                            __
 _____ _____ _____ _____ _____    _____ _____ _____ _____ _____ _____ _____|  |
|   __| __  |   __|  _  |_   _|  |   __|  |  |     |     |   __|   __|   __|  |
|  |  |    -|   __|     | | |    |__   |  |  |   --|   --|   __|__   |__   |__|
|_____|__|__|_____|__|__| |_|    |_____|_____|_____|_____|_____|_____|_____|__|



EOF
