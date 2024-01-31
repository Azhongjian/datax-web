package com.wugui.common.dstool.meta;

import com.alibaba.druid.util.JdbcConstants;

/**
 * TODO
 *
 * @author zhouhongfa@gz-yibo.com
 * @ClassName DatabaseMetaFactory
 * @Version 1.0
 * @since 2019/7/17 15:55
 */
public class DatabaseMetaFactory {

    //根据数据库类型返回对应的接口
    public static DatabaseInterface getByDbType(String dbType) {
        if (JdbcConstants.MYSQL.equals(dbType)) {
            return MySQLDatabaseMeta.getInstance();
        } else if (JdbcConstants.ORACLE.equals(dbType)) {
            return OracleDatabaseMeta.getInstance();
        } else if (JdbcConstants.POSTGRESQL.equals(dbType)) {
            return PostgresqlDatabaseMeta.getInstance();
        } else if (JdbcConstants.SQL_SERVER.equals(dbType)) {
            return SqlServerDatabaseMeta.getInstance();
        } else {
            throw new UnsupportedOperationException("暂不支持的类型：".concat(dbType));
        }
    }
}
