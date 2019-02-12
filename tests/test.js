const expect = require('chai').expect;
const assert = require('chai').assert;
const sinon  = require('sinon');
const squash = require('../lib/squash');

const HELP_FLAG = [ '--help' ];
const SYSTEM_ALIAS_FLAG = [ '--system-alias' ];
const LIST_FLAG = [ '--list' ];
const VERSION_FLAG = [ '--version' ];

const PACKAGE_CONFIG = require('../package.json');


describe('Verifies async features', function() {
  beforeEach(function() {
    sinon.stub(console, 'log').returns(void 0);
    sinon.stub(console, 'error').returns(void 0);
  });
  afterEach(function() {
    console.log.restore();
    console.error.restore();
  });
  it('prints all help flags', function(){
    squash(HELP_FLAG);
    assert.isTrue(console.log.called, 'log should have been called.');
    expect(console.log.getCall(0).args[0]).to.equal('\n');
    expect(console.log.getCall(1).args[0]).to.equal('#########################################################################################');
    expect(console.log.getCall(2).args[0]).to.equal('####       ######        #####  ########  #####        ########        ####  ########  ##');
    expect(console.log.getCall(3).args[0]).to.equal('###  ###########  ######  ####  ########  ####  ######  #####  ############  ########  ##');
    expect(console.log.getCall(4).args[0]).to.equal('##  ###########  ########  ###  ########  ###  ########  ###  #############  ########  ##');
    expect(console.log.getCall(5).args[0]).to.equal('###  ##########  ########  ###  ########  ###  ########  ####  ############  ########  ##');
    expect(console.log.getCall(6).args[0]).to.equal('####       ####  ########  ###  ########  ###  ########  #####         ####            ##');
    expect(console.log.getCall(7).args[0]).to.equal('#########   ###  ########  ###  ########  ###            ############  ####  ########  ##');
    expect(console.log.getCall(8).args[0]).to.equal('##########  ####  ######  ####  ########  ###  ########  #############  ###  ########  ##');
    expect(console.log.getCall(9).args[0]).to.equal('#########  ######       #######  ######  ####  ########  ############  ####  ########  ##');
    expect(console.log.getCall(10).args[0]).to.equal('###       #############  ########      ######  ########  ####        ######  ########  ##');
    expect(console.log.getCall(11).args[0]).to.equal('#########################################################################################');
    expect(console.log.getCall(12).args[0]).to.equal('\n');
    expect(console.log.getCall(13).args[0]).to.equal('\n\n');
    expect(console.log.getCall(14).args[0]).to.equal('Usage:');
    expect(console.log.getCall(15).args[0]).to.equal('\tsquash {{command}} {{input flags}}');
    expect(console.log.getCall(16).args[0]).to.equal('\n');
    expect(console.log.getCall(17).args[0]).to.equal('Flags:');
    expect(console.log.getCall(18).args[0]).to.equal('\t--alias\t :  \tAdds the alias for the command, this will be treated as name for that command.');
    expect(console.log.getCall(19).args[0]).to.equal('\t--list\t :  \tLists all the commands which are saved using squash.');
    expect(console.log.getCall(20).args[0]).to.equal('\t--help\t :  \tShow details of Squash.');
    expect(console.log.getCall(21).args[0]).to.equal('\t--system-alias\t :  \tShow list of system reserved aliases.');
    expect(console.log.getCall(22).args[0]).to.equal('\t--pass-args\t :  \tArguments called on the alias will be passed to the command. Use when creating the alias');
    expect(console.log.getCall(23).args[0]).to.equal('\t--version\t :  \tShow Squash version');
    expect(console.log.getCall(24).args[0]).to.equal('\t--rm\t :  \tRemoves a squash command.');
    expect(console.log.getCall(25).args[0]).to.equal('\n');
    expect(console.log.getCall(26).args[0]).to.equal('Notes');
    expect(console.log.getCall(27).args[0]).to.equal(' ✔ Provide absolute path of the files/directory, if the commands uses any file/directory from your system');
    expect(console.log.getCall(28).args[0]).to.equal(' ✔ Wrap the command in double quotes (""), if command comprises of spaces or special characters');
    expect(console.log.getCall(29).args[0]).to.equal('\n\n');
  });

  it('prints all system aliases', function(){
    squash(SYSTEM_ALIAS_FLAG);
    assert.isTrue(console.log.called, 'log should have been called.');
    expect(console.log.getCall(0).args[0]).to.equal('\n');
    expect(console.log.getCall(1).args[0]).to.equal('#########################################################################################');
    expect(console.log.getCall(2).args[0]).to.equal('####       ######        #####  ########  #####        ########        ####  ########  ##');
    expect(console.log.getCall(3).args[0]).to.equal('###  ###########  ######  ####  ########  ####  ######  #####  ############  ########  ##');
    expect(console.log.getCall(4).args[0]).to.equal('##  ###########  ########  ###  ########  ###  ########  ###  #############  ########  ##');
    expect(console.log.getCall(5).args[0]).to.equal('###  ##########  ########  ###  ########  ###  ########  ####  ############  ########  ##');
    expect(console.log.getCall(6).args[0]).to.equal('####       ####  ########  ###  ########  ###  ########  #####         ####            ##');
    expect(console.log.getCall(7).args[0]).to.equal('#########   ###  ########  ###  ########  ###            ############  ####  ########  ##');
    expect(console.log.getCall(8).args[0]).to.equal('##########  ####  ######  ####  ########  ###  ########  #############  ###  ########  ##');
    expect(console.log.getCall(9).args[0]).to.equal('#########  ######       #######  ######  ####  ########  ############  ####  ########  ##');
    expect(console.log.getCall(10).args[0]).to.equal('###       #############  ########      ######  ########  ####        ######  ########  ##');
    expect(console.log.getCall(11).args[0]).to.equal('#########################################################################################');
    expect(console.log.getCall(12).args[0]).to.equal('\n');
    expect(console.log.getCall(13).args[0]).to.equal('List of all system reserved alias.\n');
    expect(console.log.getCall(14).args[0]).to.equal('accept, access, aclocal, aconnect, acpi, acpi_available, acpid, addr2line, addresses, agetty, alias, alsactl, amidi, amixer, anacron, aplay, aplaymidi, apm, apmd, apropos');
    expect(console.log.getCall(15).args[0]).to.equal('apt, apt-get, aptitude, ar, arch, arecord, arecordmidi, arp, as, aspell, at, atd, atq, atrm, audiosend, aumix, autoconf, autoheader, automake, autoreconf');
    expect(console.log.getCall(16).args[0]).to.equal('autoscan, autoupdate, awk, badblocks, banner, basename, bash, batch, bc, bg, biff, bind, bison, break, builtin, bzcmp, bzdiff, bzgrep, bzip2, bzless');
    expect(console.log.getCall(17).args[0]).to.equal('bzmore, cal, cardctl, cardmgr, case, cat, cc, cd, cdda2wav, cdparanoia, cdrdao, cdrecord, cfdisk, chage, chattr, chdir, chfn, chgrp, chkconfig, chmod');
    expect(console.log.getCall(18).args[0]).to.equal('chown, chpasswd, chroot, chrt, chsh, chvt, cksum, clear, cmp, col, colcrt, colrm, column, comm, command, compress, continue, cp, cpio, cpp');
    expect(console.log.getCall(19).args[0]).to.equal('cron, crond, crontab, csplit, ctags, cupsd, curl, cut, cvs, date, dc, dd, ddrescue, deallocvt, debugfs, declare, depmod, devdump, df, diff');
    expect(console.log.getCall(20).args[0]).to.equal('diff3, dig, dir, dircolors, dirname, dirs, disable, dlpsh, dmesg, dnsdomainname, dnssec-keygen, dnssec-signkey, doexec, domainname, dosfsck, du, dump, dumpe2fs, dumpkeys, e2fsck');
    expect(console.log.getCall(21).args[0]).to.equal('e2image, e2label, echo, ed, edquota, egrep, eject, elvtune, emacs, enable, env, envsubst, esd, esd-config, esdcat, esdctl, esddsp, esdmon, esdplay, esdrec');
    expect(console.log.getCall(22).args[0]).to.equal('esdsample, etags, ethtool, eval, ex, exec, exit, expand, expect, export, expr, factor, false, fc-cache, fc-list, fdformat, fdisk, fetchmail, fg, fgconsole');
    expect(console.log.getCall(23).args[0]).to.equal('fgrep, file, find, finger, fingerd, flex, fmt, fold, for, formail, format, free, fsck, ftp, ftpd, function, fuser, g++, gawk, gcc');
    expect(console.log.getCall(24).args[0]).to.equal('gdb, getent, getkeycodes, getopts, gpasswd, gpg, gpgsplit, gpgv, gpm, gprof, grep, groff, groffer, groupadd, groupdel, groupmod, groups, grpck, grpconv, gs');
    expect(console.log.getCall(25).args[0]).to.equal('gunzip, gzexe, gzip, halt, hash, hdparm, head, help, hexdump, history, host, hostid, hostname, htdigest, htop, hwclock, iconv, id, if, ifconfig');
    expect(console.log.getCall(26).args[0]).to.equal('ifdown, ifup, imapd, import, inetd, info, init, insmod, install, iostat, ip, ipcrm, ipcs, iptables, iptables-save, isodump, isoinfo, isosize, isovfy, ispell');
    expect(console.log.getCall(27).args[0]).to.equal('jobs, join, kbd_mode, kbdrate, kill, killall, killall5, klogd, kudzu, last, lastb, lastlog, ld, ldconfig, ldd, less, lesskey, let, lftp, lftpget');
    expect(console.log.getCall(28).args[0]).to.equal('link, ln, loadkeys, local, locale, locate, lockfile, logger, login, logname, logout, logrotate, look, losetup, lpadmin, lpc, lpinfo, lpmove, lpq, lpr');
    expect(console.log.getCall(29).args[0]).to.equal('lprint, lprintd, lprintq, lprm, lpstat, ls, lsattr, lsblk, lsmod, lsof, lspci, lsusb, m4, mail, mailq, mailstats, mailto, make, makedbm, makemap');
    expect(console.log.getCall(30).args[0]).to.equal('man, manpath, mattrib, mbadblocks, mcat, mcd, mcopy, md5sum, mdel, mdeltree, mdir, mdu, merge, mesg, metamail, metasend, mformat, mimencode, minfo, mkdir');
    expect(console.log.getCall(31).args[0]).to.equal('mkdosfs, mke2fs, mkfifo, mkfs, mkfs.ext3, mkisofs, mklost+found, mkmanifest, mknod, mkraid, mkswap, mktemp, mlabel, mmd, mmount, mmove, mmv, modinfo, modprobe, more');
    expect(console.log.getCall(32).args[0]).to.equal('most, mount, mountd, mpartition, mpg123, mpg321, mrd, mren, mshowfat, mt, mtools, mtoolstest, mtr, mtype, mv, mzip, named, namei, nameif, nc');
    expect(console.log.getCall(33).args[0]).to.equal('netstat, newaliases, newgrp, newusers, nfsd, nfsstat, nice, nl, nm, nohup, notify-send, nslookup, nsupdate, objcopy, objdump, od, op, open, openvt, passwd');
    expect(console.log.getCall(34).args[0]).to.equal('paste, patch, pathchk, perl, pgrep, pidof, ping, pinky, pkill, pmap, popd, portmap, poweroff, pppd, pr, praliases, printcap, printenv, printf, ps');
    expect(console.log.getCall(35).args[0]).to.equal('ptx, pushd, pv, pwck, pwconv, pwd, python, quota, quotacheck, quotactl, quotaoff, quotaon, quotastats, raidstart, ram, ramsize, ranlib, rar, rarpd, rcp');
    expect(console.log.getCall(36).args[0]).to.equal('rdate, rdev, rdist, rdistd, read, readarray, readcd, readelf, readlink, readonly, reboot, reject, remsync, rename, renice, repquota, reset, resize2fs, restore, return');
    expect(console.log.getCall(37).args[0]).to.equal('rev, rexec, rexecd, richtext, rlogin, rlogind, rm, rmail, rmdir, rmmod, rndc, rootflags, route, routed, rpcgen, rpcinfo, rpm, rsh, rshd, rsync');
    expect(console.log.getCall(38).args[0]).to.equal('runlevel, rup, ruptime, rusers, rusersd, rwall, rwho, rwhod, scanadf, scanimage, scp, screen, script, sdiff, sed, select, sendmail, sensors, seq, set');
    expect(console.log.getCall(39).args[0]).to.equal('setfdprm, setkeycodes, setleds, setmetamode, setquota, setsid, setterm, sftp, sh, sha1sum, shift, shopt, showkey, showmount, shred, shutdown, size, skill, slabtop, slattach');
    expect(console.log.getCall(40).args[0]).to.equal('sleep, slocate, snice, sort, source, split, ss, ssh, ssh-add, ssh-agent, ssh-keygen, ssh-keyscan, sshd, stat, statd, strace, strfile, strings, strip, stty');
    expect(console.log.getCall(41).args[0]).to.equal('su, sudo, sum, suspend, swapoff, swapon, symlink, sync, sysctl, sysklogd, syslogd, tac, tail, tailf, talk, talkd, tar, taskset, tcpd, tcpdump');
    expect(console.log.getCall(42).args[0]).to.equal('tcpslice, tee, telinit, telnet, telnetd, test, tftp, tftpd, time, timeout, times, tload, tmpwatch, top, touch, tput, tr, tracepath, traceroute, trap');
    expect(console.log.getCall(43).args[0]).to.equal('troff, TRUE, tset, tsort, tty, tune2fs, tunelp, type, ul, ulimit, umask, umount, unalias, uname, uncompress, unexpand, unicode_start, unicode_stop, uniq, units');
    expect(console.log.getCall(44).args[0]).to.equal('unrar, unset, unshar, until, uptime, useradd, userdel, usermod, users, usleep, uudecode, uuencode, uuidgen, vdir, vi, vidmode, vim, vmstat, volname, w');
    expect(console.log.getCall(45).args[0]).to.equal('wait, wall, warnquota, watch, wc, wget, whatis, whereis, which, while, who, whoami, whois, write, xargs, xdg-open, xinetd, xz, yacc, yes');
    expect(console.log.getCall(46).args[0]).to.equal('ypbind, ypcat, ypinit, ypmatch, yppasswd, yppasswdd, yppoll, yppush, ypserv, ypset, yptest, ypwhich, ypxfr, zcat, zcmp, zdiff, zdump, zforce, zgrep, zic');
  });

  it('prints squashed command', function() {
    squash(LIST_FLAG);
    assert.isTrue(console.log.called, 'log should have been called.');
    expect(console.log.getCall(0).args[0]).to.equal('\n');
    expect(console.log.getCall(1).args[0]).to.equal('#########################################################################################');
    expect(console.log.getCall(2).args[0]).to.equal('####       ######        #####  ########  #####        ########        ####  ########  ##');
    expect(console.log.getCall(3).args[0]).to.equal('###  ###########  ######  ####  ########  ####  ######  #####  ############  ########  ##');
    expect(console.log.getCall(4).args[0]).to.equal('##  ###########  ########  ###  ########  ###  ########  ###  #############  ########  ##');
    expect(console.log.getCall(5).args[0]).to.equal('###  ##########  ########  ###  ########  ###  ########  ####  ############  ########  ##');
    expect(console.log.getCall(6).args[0]).to.equal('####       ####  ########  ###  ########  ###  ########  #####         ####            ##');
    expect(console.log.getCall(7).args[0]).to.equal('#########   ###  ########  ###  ########  ###            ############  ####  ########  ##');
    expect(console.log.getCall(8).args[0]).to.equal('##########  ####  ######  ####  ########  ###  ########  #############  ###  ########  ##');
    expect(console.log.getCall(9).args[0]).to.equal('#########  ######       #######  ######  ####  ########  ############  ####  ########  ##');
    expect(console.log.getCall(10).args[0]).to.equal('###       #############  ########      ######  ########  ####        ######  ########  ##');
    expect(console.log.getCall(11).args[0]).to.equal('#########################################################################################');
    expect(console.log.getCall(12).args[0]).to.equal('\n');
    expect(console.log.getCall(13).args[0]).to.equal('Alias -> Command');
    expect(console.log.getCall(14).args[0]).to.equal('================\n');
  });

  it('prints version', function() {
    squash(VERSION_FLAG);
    assert.isTrue(console.log.called, 'log should have been called.');
    expect(console.log.getCall(0).args[0]).to.equal('\n');
    expect(console.log.getCall(1).args[0]).to.equal('#########################################################################################');
    expect(console.log.getCall(2).args[0]).to.equal('####       ######        #####  ########  #####        ########        ####  ########  ##');
    expect(console.log.getCall(3).args[0]).to.equal('###  ###########  ######  ####  ########  ####  ######  #####  ############  ########  ##');
    expect(console.log.getCall(4).args[0]).to.equal('##  ###########  ########  ###  ########  ###  ########  ###  #############  ########  ##');
    expect(console.log.getCall(5).args[0]).to.equal('###  ##########  ########  ###  ########  ###  ########  ####  ############  ########  ##');
    expect(console.log.getCall(6).args[0]).to.equal('####       ####  ########  ###  ########  ###  ########  #####         ####            ##');
    expect(console.log.getCall(7).args[0]).to.equal('#########   ###  ########  ###  ########  ###            ############  ####  ########  ##');
    expect(console.log.getCall(8).args[0]).to.equal('##########  ####  ######  ####  ########  ###  ########  #############  ###  ########  ##');
    expect(console.log.getCall(9).args[0]).to.equal('#########  ######       #######  ######  ####  ########  ############  ####  ########  ##');
    expect(console.log.getCall(10).args[0]).to.equal('###       #############  ########      ######  ########  ####        ######  ########  ##');
    expect(console.log.getCall(11).args[0]).to.equal('#########################################################################################');
    expect(console.log.getCall(12).args[0]).to.equal('\n');
    expect(console.log.getCall(13).args[0]).to.equal(PACKAGE_CONFIG.version);
  });
});
