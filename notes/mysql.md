### 前言
##### CentOS 7 版本将MySQL数据库软件从默认的程序列表中移除，用MariaDB代替了，MariaDB数据库管理系统是MySQL的一个分支，主要由开源社区在维护，采用GPL授权许可。开发这个分支的原因之一是：甲骨文公司收购了MySQL后，有将MySQL闭源的潜在风险，因此社区采用分支的方式来避开这个风险。MariaDB的目的是完全兼容MySQL，包括API和命令行，使之能轻松成为MySQL的代替品。
1. 卸载mariadb
- 检查mariadb是否已安装: yum list installed | grep mariadb
- 全部卸载: yum -y remove mariadb*
2. 下载并安装mysql的YUM源
- 下载mysql的YUM源：wget -P /home/yangyjxm http://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm
- 由于我们是下载到/home/lisonglin目录下，所以先切换到该目录下：cd /home/yangyjxm
- 安装mysql的YUM源：rpm -ivh mysql57-community-release-el7-11.noarch.rpm
- 检查mysql的YUM源是否安装成功：yum repolist enabled
- 查看mysql版本,执行：yum repolist all | grep mysql
可以看到 5.5， 5.6，8.0 版本是默认禁用的
可以通过类似下面的语句来启动或禁用某些版本a
yum-config-manager --enable mysql57-community
yum-config-manager --disable mysql56-community
3. 安装MySQL
- yum install mysql-community-server
安装过程中一直输入"y"就可以了，当出现下面的结果时，就代表mysql数据库安装成功了
4. 测试
- 启动mysql服务：systemctl start mysqld
- 启动mysql后，会将初始密码写入日志
通过 grep 'temporary password'  /var/log/mysqld.log 命令查看
- 登录mysql：mysql -uroot -p 回车 然后输入默认密码即可登录mysql
- 使用密码登录之后 必须先修改密码，否则其他操作都执行不了(密码复杂度不够会重置失败): alter user root@localhost identified by __'Password@123'__;
- 设置完密码之后就可以使用mysql -u root -p 命令来登录我们的mysql数据库了
5. 开启远程访问权限
- 这里的Password@123为你给新增权限用户设置的密码，%代表所有主机，也可以具体到你的主机ip地址: GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'Password@123';
- 从mysql数据库的grant表中重新加载权限数据: flush privileges;
- 至此就可以通过Navicat等软件远程连接本服务器上等Mysql了
6. 退出
- quit
7. 其他
- netstat -tunlp用于显示tcp，udp的端口和进程等相关情况，如下图
命令里的t,u,n,l,p均有不同含义：
-t  仅显示和tcp相关的
-u 仅显示和udp相关的
-n 不限时别名，能显示数字的全部转换为数字
-l   仅显示出于Listen(监听)状态的
-p  显示建立这些连接的程序名