import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export const handlePrismaError = (error: PrismaClientKnownRequestError) => {
  let errorMessage = "An unexpected error occurred.";

  switch (error.code) {
    case "P1000":
      errorMessage =
        "Authentication failed against the database server. Please make sure to provide valid database credentials.";
      break;
    case "P1001":
      errorMessage =
        "Cannot reach the database server. Please make sure your database server is running and accessible.";
      break;
    case "P1002":
      errorMessage =
        "The database server was reached but timed out. Please try again and ensure your database server is running.";
      break;
    case "P1003":
      errorMessage = "The specified database does not exist.";
      break;
    case "P1008":
      errorMessage = "Database operations timed out.";
      break;
    case "P1009":
      errorMessage = "The database already exists.";
      break;
    case "P1010":
      errorMessage = "Access was denied for the specified database user.";
      break;
    case "P1011":
      errorMessage = "Error opening a TLS connection.";
      break;
    case "P1012":
      errorMessage = "A schema validation error occurred.";
      break;
    case "P1013":
      errorMessage = "The provided database string is invalid.";
      break;
    case "P1014":
      errorMessage = "The underlying resource for a model does not exist.";
      break;
    case "P1015":
      errorMessage =
        "The Prisma schema is using unsupported features for the database version.";
      break;
    case "P1016":
      errorMessage = "The raw query had an incorrect number of parameters.";
      break;
    case "P1017":
      errorMessage = "The database server has closed the connection.";
      break;
    case "P2000":
      errorMessage = "The provided value for a column is too long.";
      break;
    case "P2001":
      errorMessage =
        "The record searched for in the where condition does not exist.";
      break;
    case "P2002":
      if (
        typeof error.meta === "object" &&
        error.meta !== null &&
        "target" in error.meta
      ) {
        const meta = error.meta;
        errorMessage = ` Nilai yang anda masukan tidak unik. periksa kembali data ${String(
          meta.target
        )} anda.`;
      } else {
        errorMessage = `Nilai yang anda masukan tidak unik.`;
      }
      break;
    case "P2003":
      errorMessage = "Foreign key constraint failed.";
      break;
    case "P2004":
      errorMessage = "A constraint failed on the database.";
      break;
    case "P2005":
      errorMessage =
        "The value stored in the database is invalid for the field's type.";
      break;
    case "P2006":
      errorMessage = "The provided value for the field is not valid.";
      break;
    case "P2007":
      errorMessage = "A data validation error occurred.";
      break;
    case "P2008":
      errorMessage = "Failed to parse the query.";
      break;
    case "P2009":
      errorMessage = "Failed to validate the query.";
      break;
    case "P2010":
      errorMessage = "A raw query failed.";
      break;
    case "P2011":
      errorMessage = "Null constraint violation.";
      break;
    case "P2012":
      errorMessage = "Missing a required value.";
      break;
    case "P2013":
      errorMessage = "Missing the required argument for a field.";
      break;
    case "P2014":
      errorMessage = "The change violates a required relation.";
      break;
    case "P2015":
      errorMessage = "A related record could not be found.";
      break;
    case "P2016":
      errorMessage = "Query interpretation error.";
      break;
    case "P2017":
      errorMessage = "The records for a relation are not connected.";
      break;
    case "P2018":
      errorMessage = "The required connected records were not found.";
      break;
    case "P2019":
      errorMessage = "Input error.";
      break;
    case "P2020":
      errorMessage = "Value out of range.";
      break;
    case "P2021":
      errorMessage = "The table does not exist in the current database.";
      break;
    case "P2022":
      errorMessage = "The column does not exist in the current database.";
      break;
    case "P2023":
      errorMessage = "Inconsistent column data.";
      break;
    case "P2024":
      errorMessage =
        "Timed out fetching a new connection from the connection pool.";
      break;
    case "P2025":
      errorMessage = "An operation failed due to missing required records.";
      break;
    case "P2026":
      errorMessage = "Unsupported feature with the current database provider.";
      break;
    case "P2027":
      errorMessage = "Multiple errors occurred on the database.";
      break;
    case "P2028":
      errorMessage = "Transaction API error occurred.";
      break;
    case "P2030":
      errorMessage = "Cannot find a fulltext index to use for the search.";
      break;
    case "P2031":
      errorMessage =
        "MongoDB server needs to be run as a replica set to perform transactions.";
      break;
    case "P2033":
      errorMessage =
        "A number used in the query does not fit into a 64 bit signed integer.";
      break;
    case "P2034":
      errorMessage =
        "Transaction failed due to a write conflict or a deadlock.";
      break;
    case "P3000":
      errorMessage = "Failed to create database.";
      break;
    case "P3001":
      errorMessage =
        "Migration possible with destructive changes and possible data loss.";
      break;
    case "P3002":
      errorMessage = "The attempted migration was rolled back.";
      break;
    case "P3003":
      errorMessage =
        "The format of migrations changed, and the saved migrations are no longer valid.";
      break;
    case "P3004":
      errorMessage =
        "The database is a system database, which should not be altered with Prisma migrate.";
      break;
    case "P3005":
      errorMessage = "The database schema is not empty.";
      break;
    case "P3006":
      errorMessage =
        "Migration failed to apply cleanly to the shadow database.";
      break;
    case "P3007":
      errorMessage =
        "Some requested preview features are not yet allowed in schema engine.";
      break;
    case "P3008":
      errorMessage =
        "The migration is already recorded as applied in the database.";
      break;
    case "P3009":
      errorMessage =
        "Found failed migrations in the target database, new migrations will not be applied.";
      break;
    case "P3010":
      errorMessage = "The name of the migration is too long.";
      break;
    case "P3011":
      errorMessage =
        "Migration cannot be rolled back because it was never applied to the database.";
      break;
    case "P3012":
      errorMessage =
        "Migration cannot be rolled back because it is not in a failed state.";
      break;
    case "P3013":
      errorMessage =
        "Datasource provider arrays are no longer supported in migrate.";
      break;
    case "P3014":
      errorMessage = "Prisma Migrate could not create the shadow database.";
      break;
    case "P3015":
      errorMessage = "Could not find the migration file.";
      break;
    case "P3016":
      errorMessage = "The fallback method for database resets failed.";
      break;
    case "P3017":
      errorMessage = "The migration could not be found.";
      break;
    case "P3018":
      errorMessage =
        "A migration failed to apply. New migrations cannot be applied before the error is recovered from.";
      break;
    case "P3019":
      errorMessage =
        "The datasource provider specified in your schema does not match the one specified in the migration_lock.toml.";
      break;
    case "P3020":
      errorMessage =
        "The automatic creation of shadow databases is disabled on Azure SQL.";
      break;
    case "P3021":
      errorMessage = "Foreign keys cannot be created on this database.";
      break;
    case "P3022":
      errorMessage =
        "Direct execution of DDL SQL statements is disabled on this database.";
      break;
    case "P4000":
      errorMessage = "Introspection operation failed to produce a schema file.";
      break;
    case "P4001":
      errorMessage = "The introspected database was empty.";
      break;
    case "P4002":
      errorMessage =
        "The schema of the introspected database was inconsistent.";
      break;
    case "P6000":
      errorMessage = "A server error occurred.";
      break;
    case "P6001":
      errorMessage = "The URL is malformed.";
      break;
    case "P6002":
      errorMessage = "The API Key in the connection string is invalid.";
      break;
    case "P6003":
      errorMessage =
        "The included usage of the current plan has been exceeded.";
      break;
    case "P6004":
      errorMessage = "The global timeout of Accelerate has been exceeded.";
      break;
    case "P6005":
      errorMessage = "Invalid parameters were supplied.";
      break;
    case "P6006":
      errorMessage =
        "The chosen Prisma version is not compatible with Accelerate.";
      break;
    case "P6008":
      errorMessage = "The engine failed to start.";
      break;
    case "P6009":
      errorMessage =
        "The global response size limit of Accelerate has been exceeded.";
      break;
    // Add more cases as needed
    default:
      errorMessage += ` Error code: ${error.code}.`;
  }

  return errorMessage;
};
