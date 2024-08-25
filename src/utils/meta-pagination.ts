export const metaPagination = (
	page: number,
	perPage: number,
	totalCurrentPage: number,
	total: number,
) => {
	return {
		currentPage: page,
		perPage,
		totalCurrentPage,
		totalPage: Math.ceil(total / perPage),
		totalData: total,
	}
}
