function FindProxyForURL(url, host) {

    if (shExpMatch(host, "*.avp.ru"))
        return "SOCKS 127.0.0.1:1080";

    return "DIRECT";
}